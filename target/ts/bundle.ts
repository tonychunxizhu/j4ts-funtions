/* Generated from Java with JSweet 3.2.0-SNAPSHOT - http://www.jsweet.org */
namespace java.util.__function {
    export interface BiConsumer<T, U> {
        (t: (T | null), u: (U | null));

        (after: (BiConsumer | null)<any, any>): (BiConsumer | null)<(T | null), (U | null)>;
    }
}
namespace java.util.__function {
    export interface BiFunction<T, U, R> {
        (t: (T | null), u: (U | null)): (R | null);

        <V>(after: (java.util.__function.Function | null)<any, any>): (BiFunction | null)<(T | null), (U | null), (V | null)>;
    }
}
namespace java.util.__function {
    export interface BinaryOperator<T> {    }

    export namespace BinaryOperator {

        export function minBy<T>(comparator: (java.util.Comparator | null)<any>): (BinaryOperator | null)<(T | null)> {
            return null;
        }

        export function maxBy<T>(comparator: (java.util.Comparator | null)<any>): (BinaryOperator | null)<(T | null)> {
            return null;
        }
    }

}
namespace java.util.__function {
    export interface BiPredicate<T, U> {
        (t: (T | null), u: (U | null)): (boolean | null);

        (other: (BiPredicate | null)<any, any>): (BiPredicate | null)<(T | null), (U | null)>;

        (): (BiPredicate | null)<(T | null), (U | null)>;

        (other: (BiPredicate | null)<any, any>): (BiPredicate | null)<(T | null), (U | null)>;
    }
}
namespace java.util.__function {
    export interface BooleanSupplier {
        (): (boolean | null);
    }
}
namespace java.util.__function {
    export interface Consumer<T> {
        (t: (T | null));

        (after: (Consumer | null)<any>): (Consumer | null)<(T | null)>;
    }
}
namespace java.util.__function {
    export interface DoubleBinaryOperator {
        (left: number, right: number): number;
    }
}
namespace java.util.__function {
    export interface DoubleConsumer {
        (value: number);

        (after: (DoubleConsumer | null)): (DoubleConsumer | null);
    }
}
namespace java.util.__function {
    export interface DoubleFunction<R> {
        (value: number): (R | null);
    }
}
namespace java.util.__function {
    export interface DoublePredicate {
        (value: number): (boolean | null);

        (other: (DoublePredicate | null)): (DoublePredicate | null);

        (): (DoublePredicate | null);

        (other: (DoublePredicate | null)): (DoublePredicate | null);
    }
}
namespace java.util.__function {
    export interface DoubleSupplier {
        (): number;
    }
}
namespace java.util.__function {
    export interface DoubleToIntFunction {
        (value: number): number;
    }
}
namespace java.util.__function {
    export interface DoubleToLongFunction {
        (value: number): number;
    }
}
namespace java.util.__function {
    export interface DoubleUnaryOperator {
        applyAsDouble(operand: number): number;
    }
}
namespace java.util.__function {
    export interface Function<T, R> {
        (t: (T | null)): (R | null);
    }
}
namespace java.util.__function {
    export interface IntBinaryOperator {
        (left: number, right: number): number;
    }
}
namespace java.util.__function {
    export interface IntConsumer {
        (value: number);

        (after: (IntConsumer | null)): (IntConsumer | null);
    }
}
namespace java.util.__function {
    export interface IntFunction<R> {
        (value: number): (R | null);
    }
}
namespace java.util.__function {
    export interface IntPredicate {
        (value: number): (boolean | null);

        (other: (IntPredicate | null)): (IntPredicate | null);

        (): (IntPredicate | null);

        (other: (IntPredicate | null)): (IntPredicate | null);
    }
}
namespace java.util.__function {
    export interface IntSupplier {
        (): number;
    }
}
namespace java.util.__function {
    export interface IntToDoubleFunction {
        (value: number): number;
    }
}
namespace java.util.__function {
    export interface IntToLongFunction {
        (value: number): number;
    }
}
namespace java.util.__function {
    export interface IntUnaryOperator {
        (operand: number): number;
    }
}
namespace java.util.__function {
    export interface LongBinaryOperator {
        (left: number, right: number): number;
    }
}
namespace java.util.__function {
    export interface LongConsumer {
        (value: number);

        (after: (LongConsumer | null)): (LongConsumer | null);
    }
}
namespace java.util.__function {
    export interface LongFunction<R> {
        (value: number): (R | null);
    }
}
namespace java.util.__function {
    export interface LongPredicate {
        (value: number): (boolean | null);

        (other: (LongPredicate | null)): (LongPredicate | null);

        (): (LongPredicate | null);

        (other: (LongPredicate | null)): (LongPredicate | null);
    }
}
namespace java.util.__function {
    export interface LongSupplier {
        (): number;
    }
}
namespace java.util.__function {
    export interface LongToDoubleFunction {
        (value: number): number;
    }
}
namespace java.util.__function {
    export interface LongToIntFunction {
        (value: number): number;
    }
}
namespace java.util.__function {
    export interface LongUnaryOperator {
        (operand: number): number;
    }
}
namespace java.util.__function {
    export interface ObjDoubleConsumer<T> {
        (t: (T | null), value: number);
    }
}
namespace java.util.__function {
    export interface ObjIntConsumer<T> {
        (t: (T | null), value: number);
    }
}
namespace java.util.__function {
    export interface ObjLongConsumer<T> {
        (t: (T | null), value: number);
    }
}
namespace java.util.__function {
    export interface Predicate<T> {
        (t: (T | null)): (boolean | null);
    }
}
namespace java.util.__function {
    export interface Supplier<T> {
        (): (T | null);
    }
}
namespace java.util.__function {
    export interface ToDoubleBiFunction<T, U> {
        (t: (T | null), u: (U | null)): number;
    }
}
namespace java.util.__function {
    export interface ToDoubleFunction<T> {
        (value: (T | null)): number;
    }
}
namespace java.util.__function {
    export interface ToIntBiFunction<T, U> {
        (t: (T | null), u: (U | null)): number;
    }
}
namespace java.util.__function {
    export interface ToIntFunction<T> {
        (value: (T | null)): number;
    }
}
namespace java.util.__function {
    export interface ToLongBiFunction<T, U> {
        (t: (T | null), u: (U | null)): number;
    }
}
namespace java.util.__function {
    export interface ToLongFunction<T> {
        (value: (T | null)): number;
    }
}
namespace java.util.__function {
    export interface UnaryOperator<T> {    }
}

