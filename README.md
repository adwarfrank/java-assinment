# Car Rental System

A comprehensive Java-based Car Rental System demonstrating Object-Oriented Programming principles including inheritance, encapsulation, and polymorphism.

## Features

- **Hierarchical Inheritance Structure**
  - Car hierarchy: `Car` → `LuxuryCar`, `EconomyCar`
  - Customer hierarchy: `Customer` → `RegularCustomer`, `CorporateCustomer`

- **Login System**
  - Username: `admin`
  - Password: `pass123`
  - 3 login attempts allowed
  - Password masking (shows asterisks)

- **Core Functionalities**
  - Rent and return cars
  - Display available/all cars
  - Manage customers
  - Track rental statistics
  - Loyalty points for regular customers
  - Corporate discounts
  - Credit limit checking for corporate customers

## Files Structure

- `Car.java` - Base car class and specialized car types (LuxuryCar, EconomyCar)
- `Customer.java` - Base customer class and specialized types (RegularCustomer, CorporateCustomer)
- `RentalAgency.java` - Main management class using arrays to store cars and customers
- `CarRentalSystem.java` - Main application with login system and menu interface

## How to Compile and Run

1. Compile all Java files:
```bash
javac *.java
```

2. Run the main program:
```bash
java CarRentalSystem
```

## Login Credentials
- Username: `admin`
- Password: `pass123`

## Menu Options

1. **Display Available Cars** - Shows all cars available for rent
2. **Display All Cars** - Shows entire fleet (available and rented)
3. **Rent a Car** - Process car rental for a customer
4. **Return a Car** - Return a rented car
5. **Display All Customers** - View all registered customers
6. **Add New Car** - Add a new car to the fleet
7. **Add New Customer** - Register a new customer
8. **Display Statistics** - View rental agency statistics
9. **Run Test Scenarios** - Execute automated test cases
0. **Exit** - Close the application

## Test Data

The system initializes with:
- 5 test cars (including luxury and economy types)
- 3 test customers (regular and corporate)
- Pre-loaded loyalty points for testing discount features

## Key OOP Concepts Demonstrated

1. **Inheritance**: Specialized car and customer types extend base classes
2. **Encapsulation**: Private fields with public getter/setter methods
3. **Polymorphism**: Method overriding in child classes
4. **Arrays**: Fixed-size arrays for data storage (not ArrayList)
5. **Constructors**: Using `this` keyword for initialization
6. **Control Flow**: Loops for login attempts and menu navigation

## Testing

Run option 9 from the main menu to execute automated test scenarios that demonstrate:
- Car rental process
- Duplicate rental prevention
- Corporate customer discounts
- Car return process
- System statistics

## Notes

- Maximum capacity: 50 cars, 100 customers
- Regular customers earn 10 loyalty points per rental day
- 5% discount applied when loyalty points ≥ 100
- Corporate customers receive 15% discount
- Economy cars offer 10% discount calculation
- Luxury cars include insurance calculation (15% of rental price)