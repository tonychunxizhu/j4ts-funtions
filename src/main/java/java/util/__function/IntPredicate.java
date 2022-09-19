

























package java.util.__function;

@SuppressWarnings({"unchecked", "deprecation", "all"})
@java.lang.FunctionalInterface
public interface IntPredicate {
public boolean test(int value);

public default IntPredicate and(IntPredicate other) { return null; }

public default IntPredicate negate() { return null; }

public default IntPredicate or(IntPredicate other) { return null; }
}
