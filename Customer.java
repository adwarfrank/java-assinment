// Base Customer class representing a generic customer
public class Customer {
    // Fields for customer properties
    protected String name;
    protected String id;
    protected String contact;
    
    // Constructor using this keyword
    public Customer(String name, String id, String contact) {
        this.name = name;
        this.id = id;
        this.contact = contact;
    }
    
    // Getter methods for customer properties
    public String getName() {
        return this.name;
    }
    
    public String getId() {
        return this.id;
    }
    
    public String getContact() {
        return this.contact;
    }
    
    // Method to display customer information
    public void displayInfo() {
        System.out.println("Customer Name: " + name);
        System.out.println("Customer ID: " + id);
        System.out.println("Contact: " + contact);
    }
    
    // Method to calculate rental charges
    public double calculateRentalCharge(double basePrice, int days) {
        return basePrice * days;
    }
}

// RegularCustomer class extending Customer (Hierarchical Inheritance)
class RegularCustomer extends Customer {
    private int loyaltyPoints;
    
    // Constructor for RegularCustomer
    public RegularCustomer(String name, String id, String contact) {
        super(name, id, contact); // Call parent constructor
        this.loyaltyPoints = 0;
    }
    
    // Method to add loyalty points
    public void addLoyaltyPoints(int points) {
        this.loyaltyPoints += points;
    }
    
    // Override display method to include loyalty points
    @Override
    public void displayInfo() {
        System.out.println("--- Regular Customer ---");
        super.displayInfo();
        System.out.println("Loyalty Points: " + loyaltyPoints);
    }
    
    // Override to apply loyalty discount
    @Override
    public double calculateRentalCharge(double basePrice, int days) {
        double charge = basePrice * days;
        if (loyaltyPoints >= 100) {
            charge = charge * 0.95; // 5% discount for loyal customers
            System.out.println("Loyalty discount applied!");
        }
        return charge;
    }
}

// CorporateCustomer class extending Customer (Hierarchical Inheritance)
class CorporateCustomer extends Customer {
    private String companyName;
    private double creditLimit;
    
    // Constructor for CorporateCustomer
    public CorporateCustomer(String name, String id, String contact, String companyName, double creditLimit) {
        super(name, id, contact); // Call parent constructor
        this.companyName = companyName;
        this.creditLimit = creditLimit;
    }
    
    // Override display method to include company details
    @Override
    public void displayInfo() {
        System.out.println("--- Corporate Customer ---");
        super.displayInfo();
        System.out.println("Company: " + companyName);
        System.out.println("Credit Limit: $" + creditLimit);
    }
    
    // Override to apply corporate discount
    @Override
    public double calculateRentalCharge(double basePrice, int days) {
        double charge = basePrice * days;
        charge = charge * 0.85; // 15% corporate discount
        System.out.println("Corporate discount applied!");
        return charge;
    }
    
    // Method to check if rental is within credit limit
    public boolean checkCreditLimit(double amount) {
        return amount <= creditLimit;
    }
}