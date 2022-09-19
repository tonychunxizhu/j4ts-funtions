

























package java.util.__function;

@SuppressWarnings({"unchecked", "deprecation", "all"})
@java.lang.FunctionalInterface
public interface BiConsumer<T, U> {
public void accept(T t, U u);

public default BiConsumer<T,U> andThen(BiConsumer<? super T,? super U> after) { return null; }
}
