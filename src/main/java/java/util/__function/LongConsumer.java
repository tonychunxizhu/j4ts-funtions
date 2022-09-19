

























package java.util.__function;

@SuppressWarnings({"unchecked", "deprecation", "all"})
@java.lang.FunctionalInterface
public interface LongConsumer {
public void accept(long value);

public default LongConsumer andThen(LongConsumer after) { return null; }
}
