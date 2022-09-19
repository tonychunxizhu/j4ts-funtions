

























package java.util.__function;

@SuppressWarnings({"unchecked", "deprecation", "all"})
@java.lang.FunctionalInterface
public interface IntConsumer {
public void accept(int value);

public default IntConsumer andThen(IntConsumer after) { return null; }
}
