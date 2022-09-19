

























package java.util.__function;

@SuppressWarnings({"unchecked", "deprecation", "all"})
@java.lang.FunctionalInterface
public interface BiPredicate<T, U> {
public boolean test(T t, U u);

public default BiPredicate<T,U> and(BiPredicate<? super T,? super U> other) { return null; }

public default BiPredicate<T,U> negate() { return null; }

public default BiPredicate<T,U> or(BiPredicate<? super T,? super U> other) { return null; }
}
