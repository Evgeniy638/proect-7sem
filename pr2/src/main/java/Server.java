import java.io.IOException;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.ArrayList;
import java.util.Scanner;
import java.util.Timer;
import java.util.TimerTask;
import java.util.concurrent.Executors;

public class Server {
    public static void main(String[] args) throws Exception {
        try (var listener = new ServerSocket(8080)) {
            System.out.println("Start server...");

            var pool = Executors.newFixedThreadPool(20);
            while (true) {
                pool.execute(new Capitalizer(listener.accept()));
            }
        }
    }

    private static class Capitalizer implements Runnable {
        private final Socket socket;
        private final Scanner in;
        private final PrintWriter out;

        Capitalizer(Socket socket) throws IOException {
            this.socket = socket;
            this.in = new Scanner(socket.getInputStream());
            this.out = new PrintWriter(socket.getOutputStream(), true);
        }

        @Override
        public void run() {
            System.out.println("Connect: " + socket);

            try {
                while (true) {
                    int numberTask = this.in.nextInt();

                    switch (numberTask) {
                        case 25: {
                            task25();
                            break;
                        }
                        case 28: {
                            task28();
                            break;
                        }
                        case 1: {
                            task1();
                            break;
                        }
                        case 4: {
                            task4();
                            break;
                        }
                        case 7: {
                            task7();
                            break;
                        }
                    }
                }
            } catch (Exception e) {
                System.out.println("Error:" + socket);
                e.printStackTrace();
            }
        }

        private void task25() {
            int num = this.in.nextInt();

            try {
                out.println(Task25.log2(num));
            } catch (Error e) {
                System.out.println("Error");
                out.println(e.getMessage());
            }
        }

        private void task28() {
            double x = Double.parseDouble(this.in.next());
            double y = Double.parseDouble(this.in.next());

            try {
                out.println(Task28.func(x, y));
            } catch (Error e) {
                System.out.println(e.getMessage());
                out.println(e.getMessage());
            }
        }

        private void task1() {
            double metres = Double.parseDouble(this.in.next());

            System.out.println("metres" + metres);

            try {
                out.println(Task1.convertMetresToCentimeters(metres));
            } catch (Error e) {
                System.out.println(e.getMessage());
                out.println(e.getMessage());
            }
        }

        private void task4() {
            String bites = this.in.next();
            System.out.println(bites);

            try {
                out.println(Task4.parseDecimal(bites));
            } catch (Error e) {
                System.out.println(e.getMessage());
                out.println(e.getMessage());
            }
        }

        private void task7() {
            Point[] points = new Point[10];

            for (int i = 0; i < points.length; i++) {
                double x = Double.parseDouble(this.in.next());
                double y = Double.parseDouble(this.in.next());

                points[i] = new Point(x, y);
            }

            try {
                out.println(Task7.calcPerimeter(points));
            } catch (Error e) {
                System.out.println(e.getMessage());
                out.println(e.getMessage());
            }
        }
    }
}
