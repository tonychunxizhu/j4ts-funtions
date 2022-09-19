declare namespace java.util.__function {
    interface BiConsumer<T, U> {
        (t: (T | null), u: (U | null)): any;
        (after: (BiConsumer | null), : any, any: any, any: any): any;
    }
}
declare namespace java.util.__function {
    interface BiFunction<T, U, R> {
        (t: (T | null), u: (U | null)): (R | null);
        <V>(after: (java.util.__function.Function | null), : any, any: any, any: any): any;
    }
}
declare namespace java.util.__function {
    interface BinaryOperator<T> {
    }
    namespace BinaryOperator {
        function minBy<T>(comparator: (java.util.Comparator | null), : any, any: any): any;
        function maxBy<T>(comparator: (java.util.Comparator | null), : any, any: any): any;
    }
}
declare namespace java.util.__function {
    interface BiPredicate<T, U> {
        (t: (T | null), u: (U | null)): (boolean | null);
        (other: (BiPredicate | null), : any, any: any, any: any): any;
    }
}
declare namespace java.util.__function {
    interface BooleanSupplier {
        (): (boolean | null);
    }
}
declare namespace java.util.__function {
    interface Consumer<T> {
        (t: (T | null)): any;
        (after: (Consumer | null), : any, any: any): any;
    }
}
declare namespace java.util.__function {
    interface DoubleBinaryOperator {
        (left: number, right: number): number;
    }
}
declare namespace java.util.__function {
    interface DoubleConsumer {
        (value: number): any;
        (after: (DoubleConsumer | null)): (DoubleConsumer | null);
    }
}
declare namespace java.util.__function {
    interface DoubleFunction<R> {
        (value: number): (R | null);
    }
}
declare namespace java.util.__function {
    interface DoublePredicate {
        (value: number): (boolean | null);
        (other: (DoublePredicate | null)): (DoublePredicate | null);
        (): (DoublePredicate | null);
        (other: (DoublePredicate | null)): (DoublePredicate | null);
    }
}
declare namespace java.util.__function {
    interface DoubleSupplier {
        (): number;
    }
}
declare namespace java.util.__function {
    interface DoubleToIntFunction {
        (value: number): number;
    }
}
declare namespace java.util.__function {
    interface DoubleToLongFunction {
        (value: number): number;
    }
}
declare namespace java.util.__function {
    interface DoubleUnaryOperator {
        applyAsDouble(operand: number): number;
    }
}
declare namespace java.util.__function {
    interface Function<T, R> {
        (t: (T | null)): (R | null);
    }
}
declare namespace java.util.__function {
    interface IntBinaryOperator {
        (left: number, right: number): number;
    }
}
declare namespace java.util.__function {
    interface IntConsumer {
        (value: number): any;
        (after: (IntConsumer | null)): (IntConsumer | null);
    }
}
declare namespace java.util.__function {
    interface IntFunction<R> {
        (value: number): (R | null);
    }
}
declare namespace java.util.__function {
    interface IntPredicate {
        (value: number): (boolean | null);
        (other: (IntPredicate | null)): (IntPredicate | null);
        (): (IntPredicate | null);
        (other: (IntPredicate | null)): (IntPredicate | null);
    }
}
declare namespace java.util.__function {
    interface IntSupplier {
        (): number;
    }
}
declare namespace java.util.__function {
    interface IntToDoubleFunction {
        (value: number): number;
    }
}
declare namespace java.util.__function {
    interface IntToLongFunction {
        (value: number): number;
    }
}
declare namespace java.util.__function {
    interface IntUnaryOperator {
        (operand: number): number;
    }
}
declare namespace java.util.__function {
    interface LongBinaryOperator {
        (left: number, right: number): number;
    }
}
declare namespace java.util.__function {
    interface LongConsumer {
        (value: number): any;
        (after: (LongConsumer | null)): (LongConsumer | null);
    }
}
declare namespace java.util.__function {
    interface LongFunction<R> {
        (value: number): (R | null);
    }
}
declare namespace java.util.__function {
    interface LongPredicate {
        (value: number): (boolean | null);
        (other: (LongPredicate | null)): (LongPredicate | null);
        (): (LongPredicate | null);
        (other: (LongPredicate | null)): (LongPredicate | null);
    }
}
declare namespace java.util.__function {
    interface LongSupplier {
        (): number;
    }
}
declare namespace java.util.__function {
    interface LongToDoubleFunction {
        (value: number): number;
    }
}
declare namespace java.util.__function {
    interface LongToIntFunction {
        (value: number): number;
    }
}
declare namespace java.util.__function {
    interface LongUnaryOperator {
        (operand: number): number;
    }
}
declare namespace java.util.__function {
    interface ObjDoubleConsumer<T> {
        (t: (T | null), value: number): any;
    }
}
declare namespace java.util.__function {
    interface ObjIntConsumer<T> {
        (t: (T | null), value: number): any;
    }
}
declare namespace java.util.__function {
    interface ObjLongConsumer<T> {
        (t: (T | null), value: number): any;
    }
}
declare namespace java.util.__function {
    interface Predicate<T> {
        (t: (T | null)): (boolean | null);
    }
}
declare namespace java.util.__function {
    interface Supplier<T> {
        (): (T | null);
    }
}
declare namespace java.util.__function {
    interface ToDoubleBiFunction<T, U> {
        (t: (T | null), u: (U | null)): number;
    }
}
declare namespace java.util.__function {
    interface ToDoubleFunction<T> {
        (value: (T | null)): number;
    }
}
declare namespace java.util.__function {
    interface ToIntBiFunction<T, U> {
        (t: (T | null), u: (U | null)): number;
    }
}
declare namespace java.util.__function {
    interface ToIntFunction<T> {
        (value: (T | null)): number;
    }
}
declare namespace java.util.__function {
    interface ToLongBiFunction<T, U> {
        (t: (T | null), u: (U | null)): number;
    }
}
declare namespace java.util.__function {
    interface ToLongFunction<T> {
        (value: (T | null)): number;
    }
}
declare namespace java.util.__function {
    interface UnaryOperator<T> {
    }
}
