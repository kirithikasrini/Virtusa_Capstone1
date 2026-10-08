import java.util.Scanner;

public class BankAccount {
    private final String accountNumber;
    private final String accountHolderName;
    private double balance;

    public BankAccount(String accountNumber, String accountHolderName, double initialBalance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = Math.max(0.0, initialBalance);
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public String getAccountHolderName() {
        return accountHolderName;
    }

    public double getBalance() {
        return balance;
    }

    public boolean deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.printf("Deposited: $%.2f | New Balance: $%.2f%n", amount, balance);
            return true;
        }
        System.out.println("Deposit amount must be greater than zero.");
        return false;
    }

    public boolean withdraw(double amount) {
        if (amount <= 0) {
            System.out.println("Withdrawal amount must be greater than zero.");
            return false;
        }
        if (amount <= balance) {
            balance -= amount;
            System.out.printf("Withdrew: $%.2f | Remaining Balance: $%.2f%n", amount, balance);
            return true;
        }
        System.out.println("Insufficient balance for withdrawal.");
        return false;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter Account Number: ");
        String accNum = scanner.nextLine();

        System.out.print("Enter Account Holder Name: ");
        String accName = scanner.nextLine();

        System.out.print("Enter Initial Balance: ");
        double initialBalance = scanner.nextDouble();

        BankAccount account = new BankAccount(accNum, accName, initialBalance);

        System.out.println("\n--- Bank Account Created ---");
        System.out.println("Holder: " + account.getAccountHolderName());
        System.out.println("Account No: " + account.getAccountNumber());
        System.out.printf("Current Balance: $%.2f%n%n", account.getBalance());

        System.out.print("Enter Deposit Amount: ");
        double depAmount = scanner.nextDouble();
        account.deposit(depAmount);

        System.out.print("Enter Withdrawal Amount: ");
        double withAmount = scanner.nextDouble();
        account.withdraw(withAmount);

        scanner.close();
    }
}
