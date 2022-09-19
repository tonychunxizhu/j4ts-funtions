

























package java.util.__function;

@SuppressWarnings({"unchecked", "deprecation", "all"})
@java.lang.FunctionalInterface
public interface DoublePredicate {
public boolean test(double value);

public default DoublePredicate and(DoublePredicate other) { return null; }

public default DoublePredicate negate() { return null; }

public default DoublePredicate or(DoublePredicate other) { return null; }
}
