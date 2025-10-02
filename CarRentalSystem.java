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

// Specialized car types demonstrating hierarchical inheritance
class EconomyCar extends Car {
    private double fuelEfficiency; // km per liter as a simple specialization field

    public EconomyCar(String model, String registrationNumber, double rentalPrice, boolean available, double fuelEfficiency) {
        super(model, registrationNumber, rentalPrice, available);
        this.fuelEfficiency = fuelEfficiency;
    }

    public double getFuelEfficiency() {
        return this.fuelEfficiency;
    }
} // Purpose: EconomyCar extends Car to show inheritance for specialized car type

class LuxuryCar extends Car {
    private boolean chauffeurService; // indicates if chauffeur service is included

    public LuxuryCar(String model, String registrationNumber, double rentalPrice, boolean available, boolean chauffeurService) {
        super(model, registrationNumber, rentalPrice, available);
        this.chauffeurService = chauffeurService;
    }

    public boolean hasChauffeurService() {
        return this.chauffeurService;
    }
} // Purpose: LuxuryCar extends Car to show inheritance with additional luxury feature

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
    private int loyaltyPoints;

    public RegularCustomer(String name, int id, String contact, int loyaltyPoints) {
        super(name, id, contact);
        this.loyaltyPoints = loyaltyPoints;
    }

    public int getLoyaltyPoints() {
        return this.loyaltyPoints;
    }
} // Purpose: RegularCustomer extends Customer with loyalty attribute

class CorporateCustomer extends Customer {
    private String companyName;

    public CorporateCustomer(String name, int id, String contact, String companyName) {
        super(name, id, contact);
        this.companyName = companyName;
    }

    public String getCompanyName() {
        return this.companyName;
    }
} // Purpose: CorporateCustomer extends Customer with company association

// RentalAgency manages arrays of cars and customers and provides rental operations
class RentalAgency {
    private String agencyName;
    private Car[] cars;
    private Customer[] customers;
    private int carCount;
    private int customerCount;

    public RentalAgency(String agencyName, int maxCars, int maxCustomers) {
        this.agencyName = agencyName;
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

// Simple login/authentication system using control flow and Scanner input
interface Authenticator {
    boolean login(Scanner scanner);
} // Purpose: Define login behavior using an interface

class SimpleLogin implements Authenticator {
    private String validUsername;
    private String validPassword;

    public SimpleLogin(String validUsername, String validPassword) {
        this.validUsername = validUsername;
        this.validPassword = validPassword;
    }

    private String promptPasswordWithMask(Scanner scanner) {
        System.out.print("Enter password: ");
        String password;
        java.io.Console console = System.console();
        if (console != null) {
            char[] passChars = console.readPassword();
            password = new String(passChars);
            StringBuilder mask = new StringBuilder();
            for (int i = 0; i < password.length(); i++) {
                mask.append('*');
            }
            System.out.println(mask.toString());
        } else {
            // Fallback: read normally then print masked length
            password = scanner.nextLine();
            StringBuilder mask = new StringBuilder();
            for (int i = 0; i < password.length(); i++) {
                mask.append('*');
            }
            System.out.println(mask.toString());
        }
        return password;
    }

    @Override
    public boolean login(Scanner scanner) {
        for (int attempt = 1; attempt <= 3; attempt++) {
            System.out.print("Enter username: ");
            String username = scanner.nextLine();
            String password = promptPasswordWithMask(scanner);

            if (username.equals(this.validUsername) && password.equals(this.validPassword)) {
                System.out.println("Login successful!\n");
                return true;
            } else {
                System.out.printf("Invalid credentials. Attempts left: %d\n", (3 - attempt));
            }
        }
        System.out.println("Login failed. Exiting operations.\n");
        return false;
    }
} // Purpose: Provide a simple 3-attempt login with masked password display

// Main application tying everything together
public class CarRentalSystem {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Setup: create agency with capacities for arrays
        RentalAgency agency = new RentalAgency("CityWheels", 10, 10);

        // Create cars (Economy and Luxury) and add to agency
        Car c1 = new EconomyCar("Toyota Corolla", "ABC-123", 45.0, true, 18.5);
        Car c2 = new EconomyCar("Honda Civic", "XYZ-789", 50.0, true, 17.0);
        Car c3 = new LuxuryCar("BMW 5 Series", "LUX-555", 150.0, true, true);
        agency.addCar(c1);
        agency.addCar(c2);
        agency.addCar(c3);

        // Create customers (Regular and Corporate) and add to agency
        Customer cust1 = new RegularCustomer("Alice Johnson", 101, "alice@example.com", 120);
        Customer cust2 = new CorporateCustomer("Bob Smith", 202, "bob@corp.com", "TechCorp");
        agency.addCustomer(cust1);
        agency.addCustomer(cust2);

        // Display available cars before operations
        agency.displayAvailableCars();

        // Login phase (3 attempts). Change credentials below as needed for testing.
        Authenticator auth = new SimpleLogin("admin", "secret");
        boolean loggedIn = auth.login(scanner);
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

