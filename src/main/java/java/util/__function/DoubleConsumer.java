

























package java.util.__function;

@SuppressWarnings({"unchecked", "deprecation", "all"})
@java.lang.FunctionalInterface
public interface DoubleConsumer {
public void accept(double value);

public default DoubleConsumer andThen(DoubleConsumer after) { return null; }
}
