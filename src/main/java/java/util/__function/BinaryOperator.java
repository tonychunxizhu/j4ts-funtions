


package java.util.__function;

@SuppressWarnings({"unchecked", "deprecation", "all"})
//@java.lang.FunctionalInterface
public interface BinaryOperator<T> extends BiFunction<T,T,T> {

    public /*default */static <T> BinaryOperator<T> minBy(java.util.Comparator<? super T> comparator) {
        return null;
    }

    public static <T> BinaryOperator<T> maxBy(java.util.Comparator<? super T> comparator) {
        return null;
    }


}
