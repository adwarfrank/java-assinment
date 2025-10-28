// Base Car class representing a generic car in the rental system
public class Car {
    // Fields for car properties
    protected String model;
    protected String registrationNumber;
    protected double rentalPrice;
    protected boolean available;
    
    // Constructor using this keyword to initialize fields
    public Car(String model, String registrationNumber, double rentalPrice) {
        this.model = model;
        this.registrationNumber = registrationNumber;
        this.rentalPrice = rentalPrice;
        this.available = true; // Cars are available by default
    }
    
    // Method to rent the car
    public boolean rentCar() {
        if (this.available) {
            this.available = false;
            return true; // Successfully rented
        }
        return false; // Car not available
    }
    
    // Method to return the car
    public void returnCar() {
        this.available = true;
    }
    
    // Method to check availability
    public boolean isAvailable() {
        return this.available;
    }
    
    // Getter methods for car properties
    public String getModel() {
        return this.model;
    }
    
    public String getRegistrationNumber() {
        return this.registrationNumber;
    }
    
    public double getRentalPrice() {
        return this.rentalPrice;
    }
    
    // Method to display car information
    public void displayInfo() {
        System.out.println("Model: " + model);
        System.out.println("Registration: " + registrationNumber);
        System.out.println("Price per day: $" + rentalPrice);
        System.out.println("Available: " + (available ? "Yes" : "No"));
    }
}

// LuxuryCar class extending Car (Hierarchical Inheritance)
class LuxuryCar extends Car {
    private String luxuryFeatures;
    
    // Constructor for LuxuryCar
    public LuxuryCar(String model, String registrationNumber, double rentalPrice, String luxuryFeatures) {
        super(model, registrationNumber, rentalPrice); // Call parent constructor
        this.luxuryFeatures = luxuryFeatures;
    }
    
    // Override display method to include luxury features
    @Override
    public void displayInfo() {
        System.out.println("--- Luxury Car ---");
        super.displayInfo();
        System.out.println("Luxury Features: " + luxuryFeatures);
    }
    
    // Additional method specific to luxury cars
    public double calculateInsurance() {
        return rentalPrice * 0.15; // 15% of rental price
    }
}

// EconomyCar class extending Car (Hierarchical Inheritance)
class EconomyCar extends Car {
    private double fuelEfficiency;
    
    // Constructor for EconomyCar
    public EconomyCar(String model, String registrationNumber, double rentalPrice, double fuelEfficiency) {
        super(model, registrationNumber, rentalPrice); // Call parent constructor
        this.fuelEfficiency = fuelEfficiency;
    }
    
    // Override display method to include fuel efficiency
    @Override
    public void displayInfo() {
        System.out.println("--- Economy Car ---");
        super.displayInfo();
        System.out.println("Fuel Efficiency: " + fuelEfficiency + " km/l");
    }
    
    // Additional method for economy cars
    public double calculateDiscount() {
        return rentalPrice * 0.10; // 10% discount for economy cars
    }
}