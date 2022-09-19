

























package java.util.__function;

@SuppressWarnings({"unchecked", "deprecation", "all"})
@java.lang.FunctionalInterface
public interface Consumer<T> {
public void accept(T t);

public default Consumer<T> andThen(Consumer<? super T> after) { return null; }
}
