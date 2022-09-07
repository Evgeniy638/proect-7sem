public class Task28 {
    public static double func(double x, double y) {
        // (2*X^3-4*X^2+X+1)/(9*Y^3+Y+4) + 3*Y^2+5*Y
        return (2 * Math.pow(x, 3) - 4 * Math.pow(x, 2) + x +1) / (9 * Math.pow(y, 3) + y + 4) + 3 * Math.pow(y, 2) + 5 * y;
    }
}
