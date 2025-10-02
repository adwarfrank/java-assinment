import java.util.Scanner;
import java.io.Console;

// Main class for the Car Rental System
public class CarRentalSystem {
    private static RentalAgency agency;
    private static Scanner scanner;
    private static boolean isLoggedIn = false;
    
    // Main method - entry point of the program
    public static void main(String[] args) {
        scanner = new Scanner(System.in);
        agency = new RentalAgency();
        
        // Initialize test data
        initializeTestData();
        
        System.out.println("========================================");
        System.out.println("   Welcome to Car Rental System");
        System.out.println("========================================");
        
        // Login system with 3 attempts
        if (performLogin()) {
            // Show main menu after successful login
            showMainMenu();
        } else {
            System.out.println("\nLogin failed after 3 attempts. System will exit.");
        }
        
        scanner.close();
    }
    
    // Method to handle login with password masking
    private static boolean performLogin() {
        String correctUsername = "admin";
        String correctPassword = "pass123";
        int attempts = 3;
        
        System.out.println("\n===== Login Required =====");
        
        // Loop for 3 login attempts
        while (attempts > 0) {
            System.out.println("\nLogin Attempt " + (4 - attempts) + " of 3");
            
            // Get username
            System.out.print("Enter username: ");
            String username = scanner.nextLine();
            
            // Get password with masking
            System.out.print("Enter password: ");
            String password = getPasswordInput();
            
            // Check credentials
            if (username.equals(correctUsername) && password.equals(correctPassword)) {
                System.out.println("\nLogin successful! Welcome, " + username + "!");
                isLoggedIn = true;
                return true;
            } else {
                attempts--;
                if (attempts > 0) {
                    System.out.println("Invalid credentials. " + attempts + " attempts remaining.");
                }
            }
        }
        
        return false;
    }
    
    // Method to get password input with asterisk masking
    private static String getPasswordInput() {
        Console console = System.console();
        
        // If console is available, use it for masked input
        if (console != null) {
            char[] passwordChars = console.readPassword();
            return new String(passwordChars);
        } else {
            // Fallback for IDE environments where console is not available
            String password = "";
            String input = scanner.nextLine();
            
            // Display asterisks for visual feedback (simulated)
            for (int i = 0; i < input.length(); i++) {
                System.out.print("*");
            }
            System.out.println();
            
            return input;
        }
    }
    
    // Method to display and handle main menu
    private static void showMainMenu() {
        int choice;
        
        // Main menu loop
        do {
            System.out.println("\n========== Main Menu ==========");
            System.out.println("1. Display Available Cars");
            System.out.println("2. Display All Cars");
            System.out.println("3. Rent a Car");
            System.out.println("4. Return a Car");
            System.out.println("5. Display All Customers");
            System.out.println("6. Add New Car");
            System.out.println("7. Add New Customer");
            System.out.println("8. Display Statistics");
            System.out.println("9. Run Test Scenarios");
            System.out.println("0. Exit");
            System.out.print("Enter your choice: ");
            
            choice = scanner.nextInt();
            scanner.nextLine(); // Consume newline
            
            // Process menu choice using switch statement
            switch (choice) {
                case 1:
                    agency.displayAvailableCars();
                    break;
                case 2:
                    agency.displayAllCars();
                    break;
                case 3:
                    rentCarProcess();
                    break;
                case 4:
                    returnCarProcess();
                    break;
                case 5:
                    agency.displayAllCustomers();
                    break;
                case 6:
                    addNewCar();
                    break;
                case 7:
                    addNewCustomer();
                    break;
                case 8:
                    agency.displayStatistics();
                    break;
                case 9:
                    runTestScenarios();
                    break;
                case 0:
                    System.out.println("\nThank you for using Car Rental System. Goodbye!");
                    break;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        } while (choice != 0);
    }
    
    // Process for renting a car
    private static void rentCarProcess() {
        System.out.println("\n===== Rent a Car =====");
        System.out.print("Enter car registration number: ");
        String regNumber = scanner.nextLine();
        System.out.print("Enter customer ID: ");
        String customerId = scanner.nextLine();
        System.out.print("Enter rental period (days): ");
        int days = scanner.nextInt();
        scanner.nextLine(); // Consume newline
        
        agency.rentCar(regNumber, customerId, days);
    }
    
    // Process for returning a car
    private static void returnCarProcess() {
        System.out.println("\n===== Return a Car =====");
        System.out.print("Enter car registration number: ");
        String regNumber = scanner.nextLine();
        
        agency.returnCar(regNumber);
    }
    
    // Method to add a new car
    private static void addNewCar() {
        System.out.println("\n===== Add New Car =====");
        System.out.println("Select car type:");
        System.out.println("1. Regular Car");
        System.out.println("2. Luxury Car");
        System.out.println("3. Economy Car");
        System.out.print("Enter choice: ");
        int type = scanner.nextInt();
        scanner.nextLine(); // Consume newline
        
        System.out.print("Enter model: ");
        String model = scanner.nextLine();
        System.out.print("Enter registration number: ");
        String regNumber = scanner.nextLine();
        System.out.print("Enter rental price per day: ");
        double price = scanner.nextDouble();
        scanner.nextLine(); // Consume newline
        
        Car newCar = null;
        
        // Create appropriate car type based on choice
        switch (type) {
            case 1:
                newCar = new Car(model, regNumber, price);
                break;
            case 2:
                System.out.print("Enter luxury features: ");
                String features = scanner.nextLine();
                newCar = new LuxuryCar(model, regNumber, price, features);
                break;
            case 3:
                System.out.print("Enter fuel efficiency (km/l): ");
                double efficiency = scanner.nextDouble();
                scanner.nextLine(); // Consume newline
                newCar = new EconomyCar(model, regNumber, price, efficiency);
                break;
            default:
                System.out.println("Invalid car type.");
                return;
        }
        
        if (agency.addCar(newCar)) {
            System.out.println("Car added successfully!");
        }
    }
    
    // Method to add a new customer
    private static void addNewCustomer() {
        System.out.println("\n===== Add New Customer =====");
        System.out.println("Select customer type:");
        System.out.println("1. Regular Customer");
        System.out.println("2. Corporate Customer");
        System.out.print("Enter choice: ");
        int type = scanner.nextInt();
        scanner.nextLine(); // Consume newline
        
        System.out.print("Enter name: ");
        String name = scanner.nextLine();
        System.out.print("Enter customer ID: ");
        String id = scanner.nextLine();
        System.out.print("Enter contact: ");
        String contact = scanner.nextLine();
        
        Customer newCustomer = null;
        
        // Create appropriate customer type based on choice
        switch (type) {
            case 1:
                newCustomer = new RegularCustomer(name, id, contact);
                break;
            case 2:
                System.out.print("Enter company name: ");
                String company = scanner.nextLine();
                System.out.print("Enter credit limit: ");
                double creditLimit = scanner.nextDouble();
                scanner.nextLine(); // Consume newline
                newCustomer = new CorporateCustomer(name, id, contact, company, creditLimit);
                break;
            default:
                System.out.println("Invalid customer type.");
                return;
        }
        
        if (agency.addCustomer(newCustomer)) {
            System.out.println("Customer added successfully!");
        }
    }
    
    // Method to initialize test data
    private static void initializeTestData() {
        System.out.println("Initializing test data...");
        
        // Create test cars
        Car car1 = new Car("Toyota Camry", "ABC123", 50.0);
        Car car2 = new EconomyCar("Honda Civic", "DEF456", 40.0, 15.5);
        Car car3 = new LuxuryCar("Mercedes S-Class", "GHI789", 150.0, "Leather seats, Sunroof, GPS");
        Car car4 = new EconomyCar("Nissan Versa", "JKL012", 35.0, 18.0);
        Car car5 = new LuxuryCar("BMW 7 Series", "MNO345", 175.0, "Premium sound, Massage seats");
        
        // Add cars to agency
        agency.addCar(car1);
        agency.addCar(car2);
        agency.addCar(car3);
        agency.addCar(car4);
        agency.addCar(car5);
        
        // Create test customers
        Customer customer1 = new RegularCustomer("John Smith", "C001", "555-0101");
        Customer customer2 = new CorporateCustomer("Jane Doe", "C002", "555-0102", "Tech Corp", 5000.0);
        Customer customer3 = new RegularCustomer("Bob Johnson", "C003", "555-0103");
        
        // Add loyalty points to a regular customer for testing
        RegularCustomer regCustomer = (RegularCustomer) customer1;
        regCustomer.addLoyaltyPoints(150);
        
        // Add customers to agency
        agency.addCustomer(customer1);
        agency.addCustomer(customer2);
        agency.addCustomer(customer3);
        
        System.out.println("Test data initialized successfully!\n");
    }
    
    // Method to run test scenarios
    private static void runTestScenarios() {
        System.out.println("\n========== Running Test Scenarios ==========");
        
        // Test Scenario 1: Display available cars
        System.out.println("\nTest 1: Displaying available cars");
        agency.displayAvailableCars();
        
        // Test Scenario 2: Rent a car
        System.out.println("\nTest 2: Renting a car (ABC123 to customer C001)");
        agency.rentCar("ABC123", "C001", 3);
        
        // Test Scenario 3: Try to rent the same car again
        System.out.println("\nTest 3: Attempting to rent already rented car");
        agency.rentCar("ABC123", "C002", 2);
        
        // Test Scenario 4: Corporate customer rental
        System.out.println("\nTest 4: Corporate customer renting luxury car");
        agency.rentCar("GHI789", "C002", 5);
        
        // Test Scenario 5: Return a car
        System.out.println("\nTest 5: Returning a car (ABC123)");
        agency.returnCar("ABC123");
        
        // Test Scenario 6: Display statistics
        System.out.println("\nTest 6: Display statistics");
        agency.displayStatistics();
        
        System.out.println("\n========== Test Scenarios Completed ==========");
    }
}