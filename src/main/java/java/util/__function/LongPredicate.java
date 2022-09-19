

























package java.util.__function;

@SuppressWarnings({"unchecked", "deprecation", "all"})
@java.lang.FunctionalInterface
public interface LongPredicate {
public boolean test(long value);

public default LongPredicate and(LongPredicate other) { return null; }

public default LongPredicate negate() { return null; }

public default LongPredicate or(LongPredicate other) { return null; }
}
