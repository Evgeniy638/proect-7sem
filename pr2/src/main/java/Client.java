import java.io.PrintStream;
import java.io.PrintWriter;
import java.net.Socket;
import java.util.Scanner;

public class Client {
    public static void main(String[] args) {
        try {
            PrintStream out = new PrintStream(System.out, true, "windows-1251");
            Scanner scanner = new Scanner(System.in);

            Socket clientSocket = new Socket ("localhost",8080);

            Scanner is = new Scanner(clientSocket.getInputStream());
            PrintWriter outS = new PrintWriter(clientSocket.getOutputStream(), true);

            while (true) {
                out.print("Print number task (25, 28, 1, 4, 7) or 0 to exit: ");
                int numberTask = scanner.nextInt();

                if (numberTask == 0) {
                    break;
                }

                outS.println(numberTask);

                switch (numberTask) {
                    case 25: {
                        out.print("Number: ");
                        int num = scanner.nextInt();
                        outS.println(num);
                        String message = is.nextLine();
                        out.println("Answer: " + message);
                        break;
                    }
                    case 28: {
                        out.print("X: ");
                        String x = scanner.next();
                        outS.println(x);

                        out.print("Y: ");
                        String y = scanner.next();
                        outS.println(y);

                        String message = is.nextLine();
                        out.println("Answer: " + message);
                        break;
                    }
                    case 1: {
                        out.print("Metres: ");
                        String metres = scanner.next();
                        outS.println(metres);

                        String message = is.nextLine();
                        out.println("Answer: " + message);
                        break;
                    }
                    case 4: {
                        task4(out, scanner, is, outS);
                        break;
                    }
                    case 7: {
                        task7(out, scanner, is, outS);
                        break;
                    }
                }
            }

            is.close();
            outS.close();
            clientSocket.close();
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    private static void task4(PrintStream out, Scanner scanner, Scanner is, PrintWriter outS) {
        out.print("Bites: ");
        String bites = scanner.next();
        System.out.println(bites);
        outS.println(bites);

        double message = is.nextDouble();
        out.println("Answer: " + message);
    }

    private static void task7(PrintStream out, Scanner scanner, Scanner is, PrintWriter outS) {
        for (int i = 0; i < 10; i++) {
            nextDouble(out, scanner, outS, "Point " + (i + 1) + " x: ");
            nextDouble(out, scanner, outS, "Point " + (i + 1) + " y: ");
        }

        String message = is.nextLine();
        out.println("Answer: " + message);
    }

    private static void nextDouble(PrintStream out, Scanner scanner, PrintWriter outS, String message) {
        out.print(message);
        String value = scanner.next();
        outS.println(value);
    }
}
