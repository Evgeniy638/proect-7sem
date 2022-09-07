public class Task25 {
    public static int log2(int num) {
        if (num <= 0 || Integer.bitCount(num) > 1) {
            throw new Error("Not an integer power of 2");
        }

        return 31 - Integer.numberOfLeadingZeros(num);
    }
}
