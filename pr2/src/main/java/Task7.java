public class Task7 {
    public static double calcPerimeter(Point[] points) {
        double perimeter = 0;

        for (int i = 1; i < points.length; i++) {
            perimeter += calcDistance(points[i - 1], points[i]);
        }

        return perimeter + calcDistance(points[points.length - 1], points[0]);
    }

    private static double calcDistance(Point point1, Point point2) {
        double diffY = point2.getY() - point1.getY();
        double diffX = point2.getX() - point1.getX();

        return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
    }
}
