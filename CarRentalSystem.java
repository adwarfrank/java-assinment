import java.util.Scanner;

// Interface representing basic rental operations for rentable items like cars
interface Rentable {
    boolean isAvailable();
    boolean rentOut();
    void returnBack();
} // Purpose: Define a contract for rental actions using interfaces as per notes

// Base Car class using encapsulation and implementing Rentable
class Car implements Rentable {
    private String model;
    private String registrationNumber;
    private double rentalPrice;
    private boolean available;

    public Car(String model, String registrationNumber, double rentalPrice, boolean available) {
        this.model = model;
        this.registrationNumber = registrationNumber;
        this.rentalPrice = rentalPrice;
        this.available = available;
    }

    public String getModel() {
        return this.model;
    }

    public String getRegistrationNumber() {
        return this.registrationNumber;
    }

    public double getRentalPrice() {
        return this.rentalPrice;
    }

    @Override
    public boolean isAvailable() {
        return this.available;
    }

    @Override
    public boolean rentOut() {
        if (this.available) {
            this.available = false;
            return true;
        }
        return false;
    }

    @Override
    public void returnBack() {
        this.available = true;
    }

    public void displayInfo() {
        System.out.printf("Model: %s | Reg#: %s | Price: $%.2f | Available: %s\n",
                this.model, this.registrationNumber, this.rentalPrice, this.available ? "Yes" : "No");
    }
} // Purpose: Core car entity with fields, constructor, getters, and rent/return behavior

// Specialized car types demonstrating hierarchical inheritance (kept simple)
class EconomyCar extends Car {
    public EconomyCar(String model, String registrationNumber, double rentalPrice, boolean available) {
        super(model, registrationNumber, rentalPrice, available);
    }
} // Purpose: EconomyCar extends Car without extra fields for simplicity

class LuxuryCar extends Car {
    public LuxuryCar(String model, String registrationNumber, double rentalPrice, boolean available) {
        super(model, registrationNumber, rentalPrice, available);
    }
} // Purpose: LuxuryCar extends Car without extra fields for simplicity

// Base Customer class
class Customer {
    private String name;
    private int id;
    private String contact;

    public Customer(String name, int id, String contact) {
        this.name = name;
        this.id = id;
        this.contact = contact;
    }

    public String getName() {
        return this.name;
    }

    public int getId() {
        return this.id;
    }

    public String getContact() {
        return this.contact;
    }
} // Purpose: Core customer entity with basic identity and contact info

// Specialized customer types demonstrating hierarchical inheritance
class RegularCustomer extends Customer {
    public RegularCustomer(String name, int id, String contact) {
        super(name, id, contact);
    }
} // Purpose: RegularCustomer extends Customer without extra fields

class CorporateCustomer extends Customer {
    public CorporateCustomer(String name, int id, String contact) {
        super(name, id, contact);
    }
} // Purpose: CorporateCustomer extends Customer without extra fields

// RentalAgency manages arrays of cars and customers and provides rental operations
class RentalAgency {
    private Car[] cars;
    private Customer[] customers;
    private int carCount;
    private int customerCount;

    public RentalAgency(int maxCars, int maxCustomers) {
        this.cars = new Car[maxCars];
        this.customers = new Customer[maxCustomers];
        this.carCount = 0;
        this.customerCount = 0;
    }

    public boolean addCar(Car car) {
        if (this.carCount < this.cars.length) {
            this.cars[this.carCount] = car;
            this.carCount++;
            return true;
        }
        return false;
    }

    public boolean addCustomer(Customer customer) {
        if (this.customerCount < this.customers.length) {
            this.customers[this.customerCount] = customer;
            this.customerCount++;
            return true;
        }
        return false;
    }

    public void displayAvailableCars() {
        System.out.println("Available Cars:");
        for (int i = 0; i < this.carCount; i++) {
            Car car = this.cars[i];
            if (car != null && car.isAvailable()) {
                car.displayInfo();
            }
        }
    }

    private Car findCarByRegistration(String registrationNumber) {
        for (int i = 0; i < this.carCount; i++) {
            Car car = this.cars[i];
            if (car != null && car.getRegistrationNumber().equalsIgnoreCase(registrationNumber)) {
                return car;
            }
        }
        return null;
    }

    private Customer findCustomerById(int id) {
        for (int i = 0; i < this.customerCount; i++) {
            Customer customer = this.customers[i];
            if (customer != null && customer.getId() == id) {
                return customer;
            }
        }
        return null;
    }

    public boolean rentCar(String registrationNumber, int customerId) {
        Car car = findCarByRegistration(registrationNumber);
        Customer customer = findCustomerById(customerId);
        if (car == null) {
            System.out.println("Car not found.");
            return false;
        }
        if (customer == null) {
            System.out.println("Customer not found.");
            return false;
        }
        if (!car.isAvailable()) {
            System.out.println("Car is already rented.");
            return false;
        }
        boolean rented = car.rentOut();
        if (rented) {
            System.out.printf("Car %s rented to %s (ID: %d).\n", car.getRegistrationNumber(), customer.getName(), customer.getId());
        }
        return rented;
    }

    public boolean returnCar(String registrationNumber) {
        Car car = findCarByRegistration(registrationNumber);
        if (car == null) {
            System.out.println("Car not found.");
            return false;
        }
        if (car.isAvailable()) {
            System.out.println("Car is already available.");
            return false;
        }
        car.returnBack();
        System.out.printf("Car %s returned successfully.\n", car.getRegistrationNumber());
        return true;
    }
} // Purpose: Manage arrays of cars/customers and provide rent/return/display features

// Simple inline login method using control flow and Scanner input
class LoginHelper {
    public static boolean login(Scanner scanner, String validUsername, String validPassword) {
        for (int attempt = 1; attempt <= 3; attempt++) {
            System.out.print("Enter username: ");
            String username = scanner.nextLine();
            System.out.print("Enter password: ");
            String password = scanner.nextLine();
            for (int i = 0; i < password.length(); i++) {
                System.out.print("*");
            }
            System.out.println();
            if (username.equals(validUsername) && password.equals(validPassword)) {
                System.out.println("Login successful!\n");
                return true;
            } else {
                System.out.println("Invalid credentials.");
                System.out.println("Attempts left: " + (3 - attempt));
            }
        }
        System.out.println("Login failed.\n");
        return false;
    }
} // Purpose: Provide a basic 3-attempt login; shows * equal to password length

// Main application tying everything together
public class CarRentalSystem {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Setup: create agency with capacities for arrays
        RentalAgency agency = new RentalAgency(10, 10);

        // Create cars (Economy and Luxury) and add to agency
        Car c1 = new EconomyCar("Toyota Corolla", "ABC-123", 45.0, true);
        Car c2 = new EconomyCar("Honda Civic", "XYZ-789", 50.0, true);
        Car c3 = new LuxuryCar("BMW 5 Series", "LUX-555", 150.0, true);
        agency.addCar(c1);
        agency.addCar(c2);
        agency.addCar(c3);

        // Create customers (Regular and Corporate) and add to agency
        Customer cust1 = new RegularCustomer("Alice Johnson", 101, "alice@example.com");
        Customer cust2 = new CorporateCustomer("Bob Smith", 202, "bob@corp.com");
        agency.addCustomer(cust1);
        agency.addCustomer(cust2);

        // Display available cars before operations
        agency.displayAvailableCars();

        // Login phase (3 attempts). Change credentials below as needed for testing.
        boolean loggedIn = LoginHelper.login(scanner, "admin", "secret");
        if (!loggedIn) {
            scanner.close();
            return;
        }

        // Test: simulate renting a car
        System.out.println("Attempting to rent car ABC-123 to customer ID 101...");
        boolean rentResult1 = agency.rentCar("ABC-123", 101);
        System.out.println("Rent result: " + (rentResult1 ? "Success" : "Failure"));

        // Show availability after rental
        agency.displayAvailableCars();

        // Test: try renting same car again (should fail)
        System.out.println("Attempting to rent the same car ABC-123 again to customer ID 202...");
        boolean rentResult2 = agency.rentCar("ABC-123", 202);
        System.out.println("Rent result: " + (rentResult2 ? "Success" : "Failure"));

        // Test: return the car
        System.out.println("Returning car ABC-123...");
        boolean returnResult = agency.returnCar("ABC-123");
        System.out.println("Return result: " + (returnResult ? "Success" : "Failure"));

        // Show availability after return
        agency.displayAvailableCars();

        scanner.close();
    }
} // Purpose: Main class to run setup, login, and simulate rent/return to verify functionality

