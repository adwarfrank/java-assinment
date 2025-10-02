import java.util.Scanner;

// RentalAgency class to manage the car rental system
public class RentalAgency {
    // Arrays to store cars and customers
    private Car[] cars;
    private Customer[] customers;
    private int carCount;
    private int customerCount;
    private final int MAX_CARS = 50;
    private final int MAX_CUSTOMERS = 100;
    
    // Constructor to initialize arrays
    public RentalAgency() {
        this.cars = new Car[MAX_CARS];
        this.customers = new Customer[MAX_CUSTOMERS];
        this.carCount = 0;
        this.customerCount = 0;
    }
    
    // Method to add a car to the agency
    public boolean addCar(Car car) {
        if (carCount < MAX_CARS) {
            cars[carCount] = car;
            carCount++;
            return true;
        }
        System.out.println("Cannot add more cars. Maximum capacity reached.");
        return false;
    }
    
    // Method to add a customer to the agency
    public boolean addCustomer(Customer customer) {
        if (customerCount < MAX_CUSTOMERS) {
            customers[customerCount] = customer;
            customerCount++;
            return true;
        }
        System.out.println("Cannot add more customers. Maximum capacity reached.");
        return false;
    }
    
    // Method to display all available cars
    public void displayAvailableCars() {
        System.out.println("\n========== Available Cars ==========");
        boolean found = false;
        
        // Loop through all cars in the array
        for (int i = 0; i < carCount; i++) {
            if (cars[i].isAvailable()) {
                System.out.println("\nCar #" + (i + 1) + ":");
                cars[i].displayInfo();
                System.out.println("-------------------");
                found = true;
            }
        }
        
        // Check if no cars are available
        if (!found) {
            System.out.println("No cars are currently available for rent.");
        }
    }
    
    // Method to display all cars (available and rented)
    public void displayAllCars() {
        System.out.println("\n========== All Cars in Fleet ==========");
        
        // Loop through all cars
        for (int i = 0; i < carCount; i++) {
            System.out.println("\nCar #" + (i + 1) + ":");
            cars[i].displayInfo();
            System.out.println("-------------------");
        }
        
        // Display total count
        System.out.println("\nTotal cars in fleet: " + carCount);
    }
    
    // Method to rent a car to a customer
    public boolean rentCar(String registrationNumber, String customerId, int days) {
        Car car = findCarByRegistration(registrationNumber);
        Customer customer = findCustomerById(customerId);
        
        // Check if car and customer exist
        if (car == null) {
            System.out.println("Car with registration " + registrationNumber + " not found.");
            return false;
        }
        
        if (customer == null) {
            System.out.println("Customer with ID " + customerId + " not found.");
            return false;
        }
        
        // Try to rent the car
        if (car.rentCar()) {
            double totalCharge = customer.calculateRentalCharge(car.getRentalPrice(), days);
            
            // Check credit limit for corporate customers
            if (customer instanceof CorporateCustomer) {
                CorporateCustomer corpCustomer = (CorporateCustomer) customer;
                if (!corpCustomer.checkCreditLimit(totalCharge)) {
                    System.out.println("Rental exceeds credit limit!");
                    car.returnCar(); // Revert the rental
                    return false;
                }
            }
            
            System.out.println("\n===== Rental Successful =====");
            System.out.println("Car: " + car.getModel() + " (" + registrationNumber + ")");
            System.out.println("Customer: " + customer.getName());
            System.out.println("Rental Period: " + days + " days");
            System.out.printf("Total Charge: $%.2f\n", totalCharge);
            
            // Add loyalty points for regular customers
            if (customer instanceof RegularCustomer) {
                RegularCustomer regCustomer = (RegularCustomer) customer;
                regCustomer.addLoyaltyPoints(days * 10);
                System.out.println("Loyalty points earned: " + (days * 10));
            }
            
            return true;
        } else {
            System.out.println("Car is not available for rent.");
            return false;
        }
    }
    
    // Method to return a rented car
    public boolean returnCar(String registrationNumber) {
        Car car = findCarByRegistration(registrationNumber);
        
        // Check if car exists
        if (car == null) {
            System.out.println("Car with registration " + registrationNumber + " not found.");
            return false;
        }
        
        // Check if car was rented
        if (car.isAvailable()) {
            System.out.println("This car was not rented.");
            return false;
        }
        
        // Return the car
        car.returnCar();
        System.out.println("Car " + car.getModel() + " (" + registrationNumber + ") has been returned successfully.");
        return true;
    }
    
    // Helper method to find a car by registration number
    private Car findCarByRegistration(String registrationNumber) {
        for (int i = 0; i < carCount; i++) {
            if (cars[i].getRegistrationNumber().equals(registrationNumber)) {
                return cars[i];
            }
        }
        return null;
    }
    
    // Helper method to find a customer by ID
    private Customer findCustomerById(String customerId) {
        for (int i = 0; i < customerCount; i++) {
            if (customers[i].getId().equals(customerId)) {
                return customers[i];
            }
        }
        return null;
    }
    
    // Method to display all customers
    public void displayAllCustomers() {
        System.out.println("\n========== Registered Customers ==========");
        
        // Loop through all customers
        for (int i = 0; i < customerCount; i++) {
            System.out.println("\nCustomer #" + (i + 1) + ":");
            customers[i].displayInfo();
            System.out.println("-------------------");
        }
        
        // Display total count
        System.out.println("\nTotal registered customers: " + customerCount);
    }
    
    // Method to get statistics
    public void displayStatistics() {
        int availableCars = 0;
        int rentedCars = 0;
        
        // Count available and rented cars
        for (int i = 0; i < carCount; i++) {
            if (cars[i].isAvailable()) {
                availableCars++;
            } else {
                rentedCars++;
            }
        }
        
        System.out.println("\n========== Rental Agency Statistics ==========");
        System.out.println("Total Cars: " + carCount);
        System.out.println("Available Cars: " + availableCars);
        System.out.println("Rented Cars: " + rentedCars);
        System.out.println("Total Customers: " + customerCount);
    }
}