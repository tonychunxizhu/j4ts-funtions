

























package java.util.__function;

@SuppressWarnings({"unchecked", "deprecation", "all"})
@java.lang.FunctionalInterface
public interface BiFunction<T, U, R> {
public R apply(T t, U u);

public default <V> BiFunction<T,U,V> andThen(Function<? super R,? extends V> after) { return null; }
}
