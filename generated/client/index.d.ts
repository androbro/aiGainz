
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Exercise
 * 
 */
export type Exercise = $Result.DefaultSelection<Prisma.$ExercisePayload>
/**
 * Model MuscleType
 * 
 */
export type MuscleType = $Result.DefaultSelection<Prisma.$MuscleTypePayload>
/**
 * Model WorkoutEquipment
 * 
 */
export type WorkoutEquipment = $Result.DefaultSelection<Prisma.$WorkoutEquipmentPayload>
/**
 * Model Workout
 * 
 */
export type Workout = $Result.DefaultSelection<Prisma.$WorkoutPayload>
/**
 * Model WorkoutExercise
 * 
 */
export type WorkoutExercise = $Result.DefaultSelection<Prisma.$WorkoutExercisePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EquipmentType: {
  MACHINE: 'MACHINE',
  CABLE: 'CABLE',
  SMITH_MACHINE: 'SMITH_MACHINE',
  TRAP_BAR: 'TRAP_BAR',
  BARBELL: 'BARBELL',
  EZ_BAR: 'EZ_BAR',
  DUMBELLS: 'DUMBELLS',
  KETTLEBELLS: 'KETTLEBELLS',
  RESISTANCE_BANDS: 'RESISTANCE_BANDS',
  TRX: 'TRX',
  BODYWEIGHT: 'BODYWEIGHT',
  MISC: 'MISC',
  CARDIO: 'CARDIO'
};

export type EquipmentType = (typeof EquipmentType)[keyof typeof EquipmentType]


export const EquipmentCategory: {
  CARDIO: 'CARDIO',
  STRENGTH: 'STRENGTH',
  BALANCE: 'BALANCE',
  FLEXIBILITY: 'FLEXIBILITY',
  RECOVERY: 'RECOVERY'
};

export type EquipmentCategory = (typeof EquipmentCategory)[keyof typeof EquipmentCategory]


export const EquipmentLocation: {
  HOME: 'HOME',
  GYM: 'GYM',
  OUTDOOR: 'OUTDOOR'
};

export type EquipmentLocation = (typeof EquipmentLocation)[keyof typeof EquipmentLocation]

}

export type EquipmentType = $Enums.EquipmentType

export const EquipmentType: typeof $Enums.EquipmentType

export type EquipmentCategory = $Enums.EquipmentCategory

export const EquipmentCategory: typeof $Enums.EquipmentCategory

export type EquipmentLocation = $Enums.EquipmentLocation

export const EquipmentLocation: typeof $Enums.EquipmentLocation

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Exercises
 * const exercises = await prisma.exercise.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Exercises
   * const exercises = await prisma.exercise.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.exercise`: Exposes CRUD operations for the **Exercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exercises
    * const exercises = await prisma.exercise.findMany()
    * ```
    */
  get exercise(): Prisma.ExerciseDelegate<ExtArgs>;

  /**
   * `prisma.muscleType`: Exposes CRUD operations for the **MuscleType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MuscleTypes
    * const muscleTypes = await prisma.muscleType.findMany()
    * ```
    */
  get muscleType(): Prisma.MuscleTypeDelegate<ExtArgs>;

  /**
   * `prisma.workoutEquipment`: Exposes CRUD operations for the **WorkoutEquipment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkoutEquipments
    * const workoutEquipments = await prisma.workoutEquipment.findMany()
    * ```
    */
  get workoutEquipment(): Prisma.WorkoutEquipmentDelegate<ExtArgs>;

  /**
   * `prisma.workout`: Exposes CRUD operations for the **Workout** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workouts
    * const workouts = await prisma.workout.findMany()
    * ```
    */
  get workout(): Prisma.WorkoutDelegate<ExtArgs>;

  /**
   * `prisma.workoutExercise`: Exposes CRUD operations for the **WorkoutExercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkoutExercises
    * const workoutExercises = await prisma.workoutExercise.findMany()
    * ```
    */
  get workoutExercise(): Prisma.WorkoutExerciseDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.16.2
   * Query Engine version: 34ace0eb2704183d2c05b60b52fba5c43c13f303
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Exercise: 'Exercise',
    MuscleType: 'MuscleType',
    WorkoutEquipment: 'WorkoutEquipment',
    Workout: 'Workout',
    WorkoutExercise: 'WorkoutExercise'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "exercise" | "muscleType" | "workoutEquipment" | "workout" | "workoutExercise"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Exercise: {
        payload: Prisma.$ExercisePayload<ExtArgs>
        fields: Prisma.ExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findFirst: {
            args: Prisma.ExerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findMany: {
            args: Prisma.ExerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          create: {
            args: Prisma.ExerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          createMany: {
            args: Prisma.ExerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExerciseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          delete: {
            args: Prisma.ExerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          update: {
            args: Prisma.ExerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          deleteMany: {
            args: Prisma.ExerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          aggregate: {
            args: Prisma.ExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExercise>
          }
          groupBy: {
            args: Prisma.ExerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExerciseCountArgs<ExtArgs>
            result: $Utils.Optional<ExerciseCountAggregateOutputType> | number
          }
        }
      }
      MuscleType: {
        payload: Prisma.$MuscleTypePayload<ExtArgs>
        fields: Prisma.MuscleTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MuscleTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuscleTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MuscleTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuscleTypePayload>
          }
          findFirst: {
            args: Prisma.MuscleTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuscleTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MuscleTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuscleTypePayload>
          }
          findMany: {
            args: Prisma.MuscleTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuscleTypePayload>[]
          }
          create: {
            args: Prisma.MuscleTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuscleTypePayload>
          }
          createMany: {
            args: Prisma.MuscleTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MuscleTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuscleTypePayload>[]
          }
          delete: {
            args: Prisma.MuscleTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuscleTypePayload>
          }
          update: {
            args: Prisma.MuscleTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuscleTypePayload>
          }
          deleteMany: {
            args: Prisma.MuscleTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MuscleTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MuscleTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuscleTypePayload>
          }
          aggregate: {
            args: Prisma.MuscleTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMuscleType>
          }
          groupBy: {
            args: Prisma.MuscleTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<MuscleTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.MuscleTypeCountArgs<ExtArgs>
            result: $Utils.Optional<MuscleTypeCountAggregateOutputType> | number
          }
        }
      }
      WorkoutEquipment: {
        payload: Prisma.$WorkoutEquipmentPayload<ExtArgs>
        fields: Prisma.WorkoutEquipmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutEquipmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutEquipmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutEquipmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutEquipmentPayload>
          }
          findFirst: {
            args: Prisma.WorkoutEquipmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutEquipmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutEquipmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutEquipmentPayload>
          }
          findMany: {
            args: Prisma.WorkoutEquipmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutEquipmentPayload>[]
          }
          create: {
            args: Prisma.WorkoutEquipmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutEquipmentPayload>
          }
          createMany: {
            args: Prisma.WorkoutEquipmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutEquipmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutEquipmentPayload>[]
          }
          delete: {
            args: Prisma.WorkoutEquipmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutEquipmentPayload>
          }
          update: {
            args: Prisma.WorkoutEquipmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutEquipmentPayload>
          }
          deleteMany: {
            args: Prisma.WorkoutEquipmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutEquipmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkoutEquipmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutEquipmentPayload>
          }
          aggregate: {
            args: Prisma.WorkoutEquipmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkoutEquipment>
          }
          groupBy: {
            args: Prisma.WorkoutEquipmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutEquipmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutEquipmentCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutEquipmentCountAggregateOutputType> | number
          }
        }
      }
      Workout: {
        payload: Prisma.$WorkoutPayload<ExtArgs>
        fields: Prisma.WorkoutFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          findFirst: {
            args: Prisma.WorkoutFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          findMany: {
            args: Prisma.WorkoutFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>[]
          }
          create: {
            args: Prisma.WorkoutCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          createMany: {
            args: Prisma.WorkoutCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>[]
          }
          delete: {
            args: Prisma.WorkoutDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          update: {
            args: Prisma.WorkoutUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          deleteMany: {
            args: Prisma.WorkoutDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkoutUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          aggregate: {
            args: Prisma.WorkoutAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkout>
          }
          groupBy: {
            args: Prisma.WorkoutGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutCountAggregateOutputType> | number
          }
        }
      }
      WorkoutExercise: {
        payload: Prisma.$WorkoutExercisePayload<ExtArgs>
        fields: Prisma.WorkoutExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutExerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutExerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>
          }
          findFirst: {
            args: Prisma.WorkoutExerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutExerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>
          }
          findMany: {
            args: Prisma.WorkoutExerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>[]
          }
          create: {
            args: Prisma.WorkoutExerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>
          }
          createMany: {
            args: Prisma.WorkoutExerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutExerciseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>[]
          }
          delete: {
            args: Prisma.WorkoutExerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>
          }
          update: {
            args: Prisma.WorkoutExerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>
          }
          deleteMany: {
            args: Prisma.WorkoutExerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutExerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkoutExerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>
          }
          aggregate: {
            args: Prisma.WorkoutExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkoutExercise>
          }
          groupBy: {
            args: Prisma.WorkoutExerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutExerciseCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutExerciseCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ExerciseCountOutputType
   */

  export type ExerciseCountOutputType = {
    WorkoutExercise: number
  }

  export type ExerciseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    WorkoutExercise?: boolean | ExerciseCountOutputTypeCountWorkoutExerciseArgs
  }

  // Custom InputTypes
  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseCountOutputType
     */
    select?: ExerciseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeCountWorkoutExerciseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutExerciseWhereInput
  }


  /**
   * Count Type MuscleTypeCountOutputType
   */

  export type MuscleTypeCountOutputType = {
    primaryExercises: number
    secondaryExercises: number
  }

  export type MuscleTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    primaryExercises?: boolean | MuscleTypeCountOutputTypeCountPrimaryExercisesArgs
    secondaryExercises?: boolean | MuscleTypeCountOutputTypeCountSecondaryExercisesArgs
  }

  // Custom InputTypes
  /**
   * MuscleTypeCountOutputType without action
   */
  export type MuscleTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuscleTypeCountOutputType
     */
    select?: MuscleTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MuscleTypeCountOutputType without action
   */
  export type MuscleTypeCountOutputTypeCountPrimaryExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseWhereInput
  }

  /**
   * MuscleTypeCountOutputType without action
   */
  export type MuscleTypeCountOutputTypeCountSecondaryExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseWhereInput
  }


  /**
   * Count Type WorkoutEquipmentCountOutputType
   */

  export type WorkoutEquipmentCountOutputType = {
    exercises: number
  }

  export type WorkoutEquipmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | WorkoutEquipmentCountOutputTypeCountExercisesArgs
  }

  // Custom InputTypes
  /**
   * WorkoutEquipmentCountOutputType without action
   */
  export type WorkoutEquipmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutEquipmentCountOutputType
     */
    select?: WorkoutEquipmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkoutEquipmentCountOutputType without action
   */
  export type WorkoutEquipmentCountOutputTypeCountExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseWhereInput
  }


  /**
   * Count Type WorkoutCountOutputType
   */

  export type WorkoutCountOutputType = {
    WorkoutExercise: number
  }

  export type WorkoutCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    WorkoutExercise?: boolean | WorkoutCountOutputTypeCountWorkoutExerciseArgs
  }

  // Custom InputTypes
  /**
   * WorkoutCountOutputType without action
   */
  export type WorkoutCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutCountOutputType
     */
    select?: WorkoutCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkoutCountOutputType without action
   */
  export type WorkoutCountOutputTypeCountWorkoutExerciseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutExerciseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Exercise
   */

  export type AggregateExercise = {
    _count: ExerciseCountAggregateOutputType | null
    _avg: ExerciseAvgAggregateOutputType | null
    _sum: ExerciseSumAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  export type ExerciseAvgAggregateOutputType = {
    id: number | null
    primaryMuscleId: number | null
    secondaryMuscleId: number | null
    equipmentId: number | null
  }

  export type ExerciseSumAggregateOutputType = {
    id: number | null
    primaryMuscleId: number | null
    secondaryMuscleId: number | null
    equipmentId: number | null
  }

  export type ExerciseMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    primaryMuscleId: number | null
    secondaryMuscleId: number | null
    equipmentId: number | null
    difficulty: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExerciseMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    primaryMuscleId: number | null
    secondaryMuscleId: number | null
    equipmentId: number | null
    difficulty: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExerciseCountAggregateOutputType = {
    id: number
    name: number
    description: number
    primaryMuscleId: number
    secondaryMuscleId: number
    equipmentId: number
    difficulty: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExerciseAvgAggregateInputType = {
    id?: true
    primaryMuscleId?: true
    secondaryMuscleId?: true
    equipmentId?: true
  }

  export type ExerciseSumAggregateInputType = {
    id?: true
    primaryMuscleId?: true
    secondaryMuscleId?: true
    equipmentId?: true
  }

  export type ExerciseMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    primaryMuscleId?: true
    secondaryMuscleId?: true
    equipmentId?: true
    difficulty?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExerciseMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    primaryMuscleId?: true
    secondaryMuscleId?: true
    equipmentId?: true
    difficulty?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExerciseCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    primaryMuscleId?: true
    secondaryMuscleId?: true
    equipmentId?: true
    difficulty?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercise to aggregate.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exercises
    **/
    _count?: true | ExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExerciseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExerciseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExerciseMaxAggregateInputType
  }

  export type GetExerciseAggregateType<T extends ExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExercise[P]>
      : GetScalarType<T[P], AggregateExercise[P]>
  }




  export type ExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseWhereInput
    orderBy?: ExerciseOrderByWithAggregationInput | ExerciseOrderByWithAggregationInput[]
    by: ExerciseScalarFieldEnum[] | ExerciseScalarFieldEnum
    having?: ExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExerciseCountAggregateInputType | true
    _avg?: ExerciseAvgAggregateInputType
    _sum?: ExerciseSumAggregateInputType
    _min?: ExerciseMinAggregateInputType
    _max?: ExerciseMaxAggregateInputType
  }

  export type ExerciseGroupByOutputType = {
    id: number
    name: string
    description: string | null
    primaryMuscleId: number
    secondaryMuscleId: number | null
    equipmentId: number
    difficulty: string
    createdAt: Date
    updatedAt: Date
    _count: ExerciseCountAggregateOutputType | null
    _avg: ExerciseAvgAggregateOutputType | null
    _sum: ExerciseSumAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  type GetExerciseGroupByPayload<T extends ExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
        }
      >
    >


  export type ExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    primaryMuscleId?: boolean
    secondaryMuscleId?: boolean
    equipmentId?: boolean
    difficulty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    primaryMuscle?: boolean | MuscleTypeDefaultArgs<ExtArgs>
    secondaryMuscle?: boolean | Exercise$secondaryMuscleArgs<ExtArgs>
    equipment?: boolean | WorkoutEquipmentDefaultArgs<ExtArgs>
    WorkoutExercise?: boolean | Exercise$WorkoutExerciseArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    primaryMuscleId?: boolean
    secondaryMuscleId?: boolean
    equipmentId?: boolean
    difficulty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    primaryMuscle?: boolean | MuscleTypeDefaultArgs<ExtArgs>
    secondaryMuscle?: boolean | Exercise$secondaryMuscleArgs<ExtArgs>
    equipment?: boolean | WorkoutEquipmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    primaryMuscleId?: boolean
    secondaryMuscleId?: boolean
    equipmentId?: boolean
    difficulty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    primaryMuscle?: boolean | MuscleTypeDefaultArgs<ExtArgs>
    secondaryMuscle?: boolean | Exercise$secondaryMuscleArgs<ExtArgs>
    equipment?: boolean | WorkoutEquipmentDefaultArgs<ExtArgs>
    WorkoutExercise?: boolean | Exercise$WorkoutExerciseArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExerciseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    primaryMuscle?: boolean | MuscleTypeDefaultArgs<ExtArgs>
    secondaryMuscle?: boolean | Exercise$secondaryMuscleArgs<ExtArgs>
    equipment?: boolean | WorkoutEquipmentDefaultArgs<ExtArgs>
  }

  export type $ExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exercise"
    objects: {
      primaryMuscle: Prisma.$MuscleTypePayload<ExtArgs>
      secondaryMuscle: Prisma.$MuscleTypePayload<ExtArgs> | null
      equipment: Prisma.$WorkoutEquipmentPayload<ExtArgs>
      WorkoutExercise: Prisma.$WorkoutExercisePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      primaryMuscleId: number
      secondaryMuscleId: number | null
      equipmentId: number
      difficulty: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["exercise"]>
    composites: {}
  }

  type ExerciseGetPayload<S extends boolean | null | undefined | ExerciseDefaultArgs> = $Result.GetResult<Prisma.$ExercisePayload, S>

  type ExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExerciseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ExerciseCountAggregateInputType | true
    }

  export interface ExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exercise'], meta: { name: 'Exercise' } }
    /**
     * Find zero or one Exercise that matches the filter.
     * @param {ExerciseFindUniqueArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExerciseFindUniqueArgs>(args: SelectSubset<T, ExerciseFindUniqueArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Exercise that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ExerciseFindUniqueOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Exercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExerciseFindFirstArgs>(args?: SelectSubset<T, ExerciseFindFirstArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Exercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exercises
     * const exercises = await prisma.exercise.findMany()
     * 
     * // Get first 10 Exercises
     * const exercises = await prisma.exercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exerciseWithIdOnly = await prisma.exercise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExerciseFindManyArgs>(args?: SelectSubset<T, ExerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Exercise.
     * @param {ExerciseCreateArgs} args - Arguments to create a Exercise.
     * @example
     * // Create one Exercise
     * const Exercise = await prisma.exercise.create({
     *   data: {
     *     // ... data to create a Exercise
     *   }
     * })
     * 
     */
    create<T extends ExerciseCreateArgs>(args: SelectSubset<T, ExerciseCreateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Exercises.
     * @param {ExerciseCreateManyArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExerciseCreateManyArgs>(args?: SelectSubset<T, ExerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exercises and returns the data saved in the database.
     * @param {ExerciseCreateManyAndReturnArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exercises and only return the `id`
     * const exerciseWithIdOnly = await prisma.exercise.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExerciseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExerciseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Exercise.
     * @param {ExerciseDeleteArgs} args - Arguments to delete one Exercise.
     * @example
     * // Delete one Exercise
     * const Exercise = await prisma.exercise.delete({
     *   where: {
     *     // ... filter to delete one Exercise
     *   }
     * })
     * 
     */
    delete<T extends ExerciseDeleteArgs>(args: SelectSubset<T, ExerciseDeleteArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Exercise.
     * @param {ExerciseUpdateArgs} args - Arguments to update one Exercise.
     * @example
     * // Update one Exercise
     * const exercise = await prisma.exercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExerciseUpdateArgs>(args: SelectSubset<T, ExerciseUpdateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Exercises.
     * @param {ExerciseDeleteManyArgs} args - Arguments to filter Exercises to delete.
     * @example
     * // Delete a few Exercises
     * const { count } = await prisma.exercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExerciseDeleteManyArgs>(args?: SelectSubset<T, ExerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExerciseUpdateManyArgs>(args: SelectSubset<T, ExerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Exercise.
     * @param {ExerciseUpsertArgs} args - Arguments to update or create a Exercise.
     * @example
     * // Update or create a Exercise
     * const exercise = await prisma.exercise.upsert({
     *   create: {
     *     // ... data to create a Exercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exercise we want to update
     *   }
     * })
     */
    upsert<T extends ExerciseUpsertArgs>(args: SelectSubset<T, ExerciseUpsertArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseCountArgs} args - Arguments to filter Exercises to count.
     * @example
     * // Count the number of Exercises
     * const count = await prisma.exercise.count({
     *   where: {
     *     // ... the filter for the Exercises we want to count
     *   }
     * })
    **/
    count<T extends ExerciseCountArgs>(
      args?: Subset<T, ExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExerciseAggregateArgs>(args: Subset<T, ExerciseAggregateArgs>): Prisma.PrismaPromise<GetExerciseAggregateType<T>>

    /**
     * Group by Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExerciseGroupByArgs['orderBy'] }
        : { orderBy?: ExerciseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exercise model
   */
  readonly fields: ExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    primaryMuscle<T extends MuscleTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MuscleTypeDefaultArgs<ExtArgs>>): Prisma__MuscleTypeClient<$Result.GetResult<Prisma.$MuscleTypePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    secondaryMuscle<T extends Exercise$secondaryMuscleArgs<ExtArgs> = {}>(args?: Subset<T, Exercise$secondaryMuscleArgs<ExtArgs>>): Prisma__MuscleTypeClient<$Result.GetResult<Prisma.$MuscleTypePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    equipment<T extends WorkoutEquipmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutEquipmentDefaultArgs<ExtArgs>>): Prisma__WorkoutEquipmentClient<$Result.GetResult<Prisma.$WorkoutEquipmentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    WorkoutExercise<T extends Exercise$WorkoutExerciseArgs<ExtArgs> = {}>(args?: Subset<T, Exercise$WorkoutExerciseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Exercise model
   */ 
  interface ExerciseFieldRefs {
    readonly id: FieldRef<"Exercise", 'Int'>
    readonly name: FieldRef<"Exercise", 'String'>
    readonly description: FieldRef<"Exercise", 'String'>
    readonly primaryMuscleId: FieldRef<"Exercise", 'Int'>
    readonly secondaryMuscleId: FieldRef<"Exercise", 'Int'>
    readonly equipmentId: FieldRef<"Exercise", 'Int'>
    readonly difficulty: FieldRef<"Exercise", 'String'>
    readonly createdAt: FieldRef<"Exercise", 'DateTime'>
    readonly updatedAt: FieldRef<"Exercise", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Exercise findUnique
   */
  export type ExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findUniqueOrThrow
   */
  export type ExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findFirst
   */
  export type ExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findFirstOrThrow
   */
  export type ExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findMany
   */
  export type ExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercises to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise create
   */
  export type ExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a Exercise.
     */
    data: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
  }

  /**
   * Exercise createMany
   */
  export type ExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exercise createManyAndReturn
   */
  export type ExerciseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Exercise update
   */
  export type ExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a Exercise.
     */
    data: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
    /**
     * Choose, which Exercise to update.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise updateMany
   */
  export type ExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExerciseWhereInput
  }

  /**
   * Exercise upsert
   */
  export type ExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the Exercise to update in case it exists.
     */
    where: ExerciseWhereUniqueInput
    /**
     * In case the Exercise found by the `where` argument doesn't exist, create a new Exercise with this data.
     */
    create: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
    /**
     * In case the Exercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
  }

  /**
   * Exercise delete
   */
  export type ExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter which Exercise to delete.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise deleteMany
   */
  export type ExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercises to delete
     */
    where?: ExerciseWhereInput
  }

  /**
   * Exercise.secondaryMuscle
   */
  export type Exercise$secondaryMuscleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuscleType
     */
    select?: MuscleTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuscleTypeInclude<ExtArgs> | null
    where?: MuscleTypeWhereInput
  }

  /**
   * Exercise.WorkoutExercise
   */
  export type Exercise$WorkoutExerciseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    where?: WorkoutExerciseWhereInput
    orderBy?: WorkoutExerciseOrderByWithRelationInput | WorkoutExerciseOrderByWithRelationInput[]
    cursor?: WorkoutExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutExerciseScalarFieldEnum | WorkoutExerciseScalarFieldEnum[]
  }

  /**
   * Exercise without action
   */
  export type ExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
  }


  /**
   * Model MuscleType
   */

  export type AggregateMuscleType = {
    _count: MuscleTypeCountAggregateOutputType | null
    _avg: MuscleTypeAvgAggregateOutputType | null
    _sum: MuscleTypeSumAggregateOutputType | null
    _min: MuscleTypeMinAggregateOutputType | null
    _max: MuscleTypeMaxAggregateOutputType | null
  }

  export type MuscleTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type MuscleTypeSumAggregateOutputType = {
    id: number | null
  }

  export type MuscleTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type MuscleTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type MuscleTypeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type MuscleTypeAvgAggregateInputType = {
    id?: true
  }

  export type MuscleTypeSumAggregateInputType = {
    id?: true
  }

  export type MuscleTypeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type MuscleTypeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type MuscleTypeCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type MuscleTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MuscleType to aggregate.
     */
    where?: MuscleTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MuscleTypes to fetch.
     */
    orderBy?: MuscleTypeOrderByWithRelationInput | MuscleTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MuscleTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MuscleTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MuscleTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MuscleTypes
    **/
    _count?: true | MuscleTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MuscleTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MuscleTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MuscleTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MuscleTypeMaxAggregateInputType
  }

  export type GetMuscleTypeAggregateType<T extends MuscleTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateMuscleType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMuscleType[P]>
      : GetScalarType<T[P], AggregateMuscleType[P]>
  }




  export type MuscleTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MuscleTypeWhereInput
    orderBy?: MuscleTypeOrderByWithAggregationInput | MuscleTypeOrderByWithAggregationInput[]
    by: MuscleTypeScalarFieldEnum[] | MuscleTypeScalarFieldEnum
    having?: MuscleTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MuscleTypeCountAggregateInputType | true
    _avg?: MuscleTypeAvgAggregateInputType
    _sum?: MuscleTypeSumAggregateInputType
    _min?: MuscleTypeMinAggregateInputType
    _max?: MuscleTypeMaxAggregateInputType
  }

  export type MuscleTypeGroupByOutputType = {
    id: number
    name: string
    _count: MuscleTypeCountAggregateOutputType | null
    _avg: MuscleTypeAvgAggregateOutputType | null
    _sum: MuscleTypeSumAggregateOutputType | null
    _min: MuscleTypeMinAggregateOutputType | null
    _max: MuscleTypeMaxAggregateOutputType | null
  }

  type GetMuscleTypeGroupByPayload<T extends MuscleTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MuscleTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MuscleTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MuscleTypeGroupByOutputType[P]>
            : GetScalarType<T[P], MuscleTypeGroupByOutputType[P]>
        }
      >
    >


  export type MuscleTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    primaryExercises?: boolean | MuscleType$primaryExercisesArgs<ExtArgs>
    secondaryExercises?: boolean | MuscleType$secondaryExercisesArgs<ExtArgs>
    _count?: boolean | MuscleTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["muscleType"]>

  export type MuscleTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["muscleType"]>

  export type MuscleTypeSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type MuscleTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    primaryExercises?: boolean | MuscleType$primaryExercisesArgs<ExtArgs>
    secondaryExercises?: boolean | MuscleType$secondaryExercisesArgs<ExtArgs>
    _count?: boolean | MuscleTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MuscleTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MuscleTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MuscleType"
    objects: {
      primaryExercises: Prisma.$ExercisePayload<ExtArgs>[]
      secondaryExercises: Prisma.$ExercisePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["muscleType"]>
    composites: {}
  }

  type MuscleTypeGetPayload<S extends boolean | null | undefined | MuscleTypeDefaultArgs> = $Result.GetResult<Prisma.$MuscleTypePayload, S>

  type MuscleTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MuscleTypeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MuscleTypeCountAggregateInputType | true
    }

  export interface MuscleTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MuscleType'], meta: { name: 'MuscleType' } }
    /**
     * Find zero or one MuscleType that matches the filter.
     * @param {MuscleTypeFindUniqueArgs} args - Arguments to find a MuscleType
     * @example
     * // Get one MuscleType
     * const muscleType = await prisma.muscleType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MuscleTypeFindUniqueArgs>(args: SelectSubset<T, MuscleTypeFindUniqueArgs<ExtArgs>>): Prisma__MuscleTypeClient<$Result.GetResult<Prisma.$MuscleTypePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MuscleType that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MuscleTypeFindUniqueOrThrowArgs} args - Arguments to find a MuscleType
     * @example
     * // Get one MuscleType
     * const muscleType = await prisma.muscleType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MuscleTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, MuscleTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MuscleTypeClient<$Result.GetResult<Prisma.$MuscleTypePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MuscleType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuscleTypeFindFirstArgs} args - Arguments to find a MuscleType
     * @example
     * // Get one MuscleType
     * const muscleType = await prisma.muscleType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MuscleTypeFindFirstArgs>(args?: SelectSubset<T, MuscleTypeFindFirstArgs<ExtArgs>>): Prisma__MuscleTypeClient<$Result.GetResult<Prisma.$MuscleTypePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MuscleType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuscleTypeFindFirstOrThrowArgs} args - Arguments to find a MuscleType
     * @example
     * // Get one MuscleType
     * const muscleType = await prisma.muscleType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MuscleTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, MuscleTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__MuscleTypeClient<$Result.GetResult<Prisma.$MuscleTypePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MuscleTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuscleTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MuscleTypes
     * const muscleTypes = await prisma.muscleType.findMany()
     * 
     * // Get first 10 MuscleTypes
     * const muscleTypes = await prisma.muscleType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const muscleTypeWithIdOnly = await prisma.muscleType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MuscleTypeFindManyArgs>(args?: SelectSubset<T, MuscleTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MuscleTypePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MuscleType.
     * @param {MuscleTypeCreateArgs} args - Arguments to create a MuscleType.
     * @example
     * // Create one MuscleType
     * const MuscleType = await prisma.muscleType.create({
     *   data: {
     *     // ... data to create a MuscleType
     *   }
     * })
     * 
     */
    create<T extends MuscleTypeCreateArgs>(args: SelectSubset<T, MuscleTypeCreateArgs<ExtArgs>>): Prisma__MuscleTypeClient<$Result.GetResult<Prisma.$MuscleTypePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MuscleTypes.
     * @param {MuscleTypeCreateManyArgs} args - Arguments to create many MuscleTypes.
     * @example
     * // Create many MuscleTypes
     * const muscleType = await prisma.muscleType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MuscleTypeCreateManyArgs>(args?: SelectSubset<T, MuscleTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MuscleTypes and returns the data saved in the database.
     * @param {MuscleTypeCreateManyAndReturnArgs} args - Arguments to create many MuscleTypes.
     * @example
     * // Create many MuscleTypes
     * const muscleType = await prisma.muscleType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MuscleTypes and only return the `id`
     * const muscleTypeWithIdOnly = await prisma.muscleType.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MuscleTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, MuscleTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MuscleTypePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MuscleType.
     * @param {MuscleTypeDeleteArgs} args - Arguments to delete one MuscleType.
     * @example
     * // Delete one MuscleType
     * const MuscleType = await prisma.muscleType.delete({
     *   where: {
     *     // ... filter to delete one MuscleType
     *   }
     * })
     * 
     */
    delete<T extends MuscleTypeDeleteArgs>(args: SelectSubset<T, MuscleTypeDeleteArgs<ExtArgs>>): Prisma__MuscleTypeClient<$Result.GetResult<Prisma.$MuscleTypePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MuscleType.
     * @param {MuscleTypeUpdateArgs} args - Arguments to update one MuscleType.
     * @example
     * // Update one MuscleType
     * const muscleType = await prisma.muscleType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MuscleTypeUpdateArgs>(args: SelectSubset<T, MuscleTypeUpdateArgs<ExtArgs>>): Prisma__MuscleTypeClient<$Result.GetResult<Prisma.$MuscleTypePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MuscleTypes.
     * @param {MuscleTypeDeleteManyArgs} args - Arguments to filter MuscleTypes to delete.
     * @example
     * // Delete a few MuscleTypes
     * const { count } = await prisma.muscleType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MuscleTypeDeleteManyArgs>(args?: SelectSubset<T, MuscleTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MuscleTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuscleTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MuscleTypes
     * const muscleType = await prisma.muscleType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MuscleTypeUpdateManyArgs>(args: SelectSubset<T, MuscleTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MuscleType.
     * @param {MuscleTypeUpsertArgs} args - Arguments to update or create a MuscleType.
     * @example
     * // Update or create a MuscleType
     * const muscleType = await prisma.muscleType.upsert({
     *   create: {
     *     // ... data to create a MuscleType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MuscleType we want to update
     *   }
     * })
     */
    upsert<T extends MuscleTypeUpsertArgs>(args: SelectSubset<T, MuscleTypeUpsertArgs<ExtArgs>>): Prisma__MuscleTypeClient<$Result.GetResult<Prisma.$MuscleTypePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MuscleTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuscleTypeCountArgs} args - Arguments to filter MuscleTypes to count.
     * @example
     * // Count the number of MuscleTypes
     * const count = await prisma.muscleType.count({
     *   where: {
     *     // ... the filter for the MuscleTypes we want to count
     *   }
     * })
    **/
    count<T extends MuscleTypeCountArgs>(
      args?: Subset<T, MuscleTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MuscleTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MuscleType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuscleTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MuscleTypeAggregateArgs>(args: Subset<T, MuscleTypeAggregateArgs>): Prisma.PrismaPromise<GetMuscleTypeAggregateType<T>>

    /**
     * Group by MuscleType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuscleTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MuscleTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MuscleTypeGroupByArgs['orderBy'] }
        : { orderBy?: MuscleTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MuscleTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMuscleTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MuscleType model
   */
  readonly fields: MuscleTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MuscleType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MuscleTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    primaryExercises<T extends MuscleType$primaryExercisesArgs<ExtArgs> = {}>(args?: Subset<T, MuscleType$primaryExercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findMany"> | Null>
    secondaryExercises<T extends MuscleType$secondaryExercisesArgs<ExtArgs> = {}>(args?: Subset<T, MuscleType$secondaryExercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MuscleType model
   */ 
  interface MuscleTypeFieldRefs {
    readonly id: FieldRef<"MuscleType", 'Int'>
    readonly name: FieldRef<"MuscleType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MuscleType findUnique
   */
  export type MuscleTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuscleType
     */
    select?: MuscleTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuscleTypeInclude<ExtArgs> | null
    /**
     * Filter, which MuscleType to fetch.
     */
    where: MuscleTypeWhereUniqueInput
  }

  /**
   * MuscleType findUniqueOrThrow
   */
  export type MuscleTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuscleType
     */
    select?: MuscleTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuscleTypeInclude<ExtArgs> | null
    /**
     * Filter, which MuscleType to fetch.
     */
    where: MuscleTypeWhereUniqueInput
  }

  /**
   * MuscleType findFirst
   */
  export type MuscleTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuscleType
     */
    select?: MuscleTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuscleTypeInclude<ExtArgs> | null
    /**
     * Filter, which MuscleType to fetch.
     */
    where?: MuscleTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MuscleTypes to fetch.
     */
    orderBy?: MuscleTypeOrderByWithRelationInput | MuscleTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MuscleTypes.
     */
    cursor?: MuscleTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MuscleTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MuscleTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MuscleTypes.
     */
    distinct?: MuscleTypeScalarFieldEnum | MuscleTypeScalarFieldEnum[]
  }

  /**
   * MuscleType findFirstOrThrow
   */
  export type MuscleTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuscleType
     */
    select?: MuscleTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuscleTypeInclude<ExtArgs> | null
    /**
     * Filter, which MuscleType to fetch.
     */
    where?: MuscleTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MuscleTypes to fetch.
     */
    orderBy?: MuscleTypeOrderByWithRelationInput | MuscleTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MuscleTypes.
     */
    cursor?: MuscleTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MuscleTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MuscleTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MuscleTypes.
     */
    distinct?: MuscleTypeScalarFieldEnum | MuscleTypeScalarFieldEnum[]
  }

  /**
   * MuscleType findMany
   */
  export type MuscleTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuscleType
     */
    select?: MuscleTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuscleTypeInclude<ExtArgs> | null
    /**
     * Filter, which MuscleTypes to fetch.
     */
    where?: MuscleTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MuscleTypes to fetch.
     */
    orderBy?: MuscleTypeOrderByWithRelationInput | MuscleTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MuscleTypes.
     */
    cursor?: MuscleTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MuscleTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MuscleTypes.
     */
    skip?: number
    distinct?: MuscleTypeScalarFieldEnum | MuscleTypeScalarFieldEnum[]
  }

  /**
   * MuscleType create
   */
  export type MuscleTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuscleType
     */
    select?: MuscleTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuscleTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a MuscleType.
     */
    data: XOR<MuscleTypeCreateInput, MuscleTypeUncheckedCreateInput>
  }

  /**
   * MuscleType createMany
   */
  export type MuscleTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MuscleTypes.
     */
    data: MuscleTypeCreateManyInput | MuscleTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MuscleType createManyAndReturn
   */
  export type MuscleTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuscleType
     */
    select?: MuscleTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MuscleTypes.
     */
    data: MuscleTypeCreateManyInput | MuscleTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MuscleType update
   */
  export type MuscleTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuscleType
     */
    select?: MuscleTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuscleTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a MuscleType.
     */
    data: XOR<MuscleTypeUpdateInput, MuscleTypeUncheckedUpdateInput>
    /**
     * Choose, which MuscleType to update.
     */
    where: MuscleTypeWhereUniqueInput
  }

  /**
   * MuscleType updateMany
   */
  export type MuscleTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MuscleTypes.
     */
    data: XOR<MuscleTypeUpdateManyMutationInput, MuscleTypeUncheckedUpdateManyInput>
    /**
     * Filter which MuscleTypes to update
     */
    where?: MuscleTypeWhereInput
  }

  /**
   * MuscleType upsert
   */
  export type MuscleTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuscleType
     */
    select?: MuscleTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuscleTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the MuscleType to update in case it exists.
     */
    where: MuscleTypeWhereUniqueInput
    /**
     * In case the MuscleType found by the `where` argument doesn't exist, create a new MuscleType with this data.
     */
    create: XOR<MuscleTypeCreateInput, MuscleTypeUncheckedCreateInput>
    /**
     * In case the MuscleType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MuscleTypeUpdateInput, MuscleTypeUncheckedUpdateInput>
  }

  /**
   * MuscleType delete
   */
  export type MuscleTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuscleType
     */
    select?: MuscleTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuscleTypeInclude<ExtArgs> | null
    /**
     * Filter which MuscleType to delete.
     */
    where: MuscleTypeWhereUniqueInput
  }

  /**
   * MuscleType deleteMany
   */
  export type MuscleTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MuscleTypes to delete
     */
    where?: MuscleTypeWhereInput
  }

  /**
   * MuscleType.primaryExercises
   */
  export type MuscleType$primaryExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    where?: ExerciseWhereInput
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    cursor?: ExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * MuscleType.secondaryExercises
   */
  export type MuscleType$secondaryExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    where?: ExerciseWhereInput
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    cursor?: ExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * MuscleType without action
   */
  export type MuscleTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuscleType
     */
    select?: MuscleTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuscleTypeInclude<ExtArgs> | null
  }


  /**
   * Model WorkoutEquipment
   */

  export type AggregateWorkoutEquipment = {
    _count: WorkoutEquipmentCountAggregateOutputType | null
    _avg: WorkoutEquipmentAvgAggregateOutputType | null
    _sum: WorkoutEquipmentSumAggregateOutputType | null
    _min: WorkoutEquipmentMinAggregateOutputType | null
    _max: WorkoutEquipmentMaxAggregateOutputType | null
  }

  export type WorkoutEquipmentAvgAggregateOutputType = {
    id: number | null
  }

  export type WorkoutEquipmentSumAggregateOutputType = {
    id: number | null
  }

  export type WorkoutEquipmentMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: $Enums.EquipmentType | null
    category: $Enums.EquipmentCategory | null
    location: $Enums.EquipmentLocation | null
  }

  export type WorkoutEquipmentMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: $Enums.EquipmentType | null
    category: $Enums.EquipmentCategory | null
    location: $Enums.EquipmentLocation | null
  }

  export type WorkoutEquipmentCountAggregateOutputType = {
    id: number
    name: number
    type: number
    category: number
    location: number
    _all: number
  }


  export type WorkoutEquipmentAvgAggregateInputType = {
    id?: true
  }

  export type WorkoutEquipmentSumAggregateInputType = {
    id?: true
  }

  export type WorkoutEquipmentMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    category?: true
    location?: true
  }

  export type WorkoutEquipmentMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    category?: true
    location?: true
  }

  export type WorkoutEquipmentCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    category?: true
    location?: true
    _all?: true
  }

  export type WorkoutEquipmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutEquipment to aggregate.
     */
    where?: WorkoutEquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutEquipments to fetch.
     */
    orderBy?: WorkoutEquipmentOrderByWithRelationInput | WorkoutEquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutEquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutEquipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutEquipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkoutEquipments
    **/
    _count?: true | WorkoutEquipmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkoutEquipmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkoutEquipmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutEquipmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutEquipmentMaxAggregateInputType
  }

  export type GetWorkoutEquipmentAggregateType<T extends WorkoutEquipmentAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkoutEquipment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkoutEquipment[P]>
      : GetScalarType<T[P], AggregateWorkoutEquipment[P]>
  }




  export type WorkoutEquipmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutEquipmentWhereInput
    orderBy?: WorkoutEquipmentOrderByWithAggregationInput | WorkoutEquipmentOrderByWithAggregationInput[]
    by: WorkoutEquipmentScalarFieldEnum[] | WorkoutEquipmentScalarFieldEnum
    having?: WorkoutEquipmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutEquipmentCountAggregateInputType | true
    _avg?: WorkoutEquipmentAvgAggregateInputType
    _sum?: WorkoutEquipmentSumAggregateInputType
    _min?: WorkoutEquipmentMinAggregateInputType
    _max?: WorkoutEquipmentMaxAggregateInputType
  }

  export type WorkoutEquipmentGroupByOutputType = {
    id: number
    name: string
    type: $Enums.EquipmentType
    category: $Enums.EquipmentCategory
    location: $Enums.EquipmentLocation
    _count: WorkoutEquipmentCountAggregateOutputType | null
    _avg: WorkoutEquipmentAvgAggregateOutputType | null
    _sum: WorkoutEquipmentSumAggregateOutputType | null
    _min: WorkoutEquipmentMinAggregateOutputType | null
    _max: WorkoutEquipmentMaxAggregateOutputType | null
  }

  type GetWorkoutEquipmentGroupByPayload<T extends WorkoutEquipmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutEquipmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutEquipmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutEquipmentGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutEquipmentGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutEquipmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    category?: boolean
    location?: boolean
    exercises?: boolean | WorkoutEquipment$exercisesArgs<ExtArgs>
    _count?: boolean | WorkoutEquipmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutEquipment"]>

  export type WorkoutEquipmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    category?: boolean
    location?: boolean
  }, ExtArgs["result"]["workoutEquipment"]>

  export type WorkoutEquipmentSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    category?: boolean
    location?: boolean
  }

  export type WorkoutEquipmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | WorkoutEquipment$exercisesArgs<ExtArgs>
    _count?: boolean | WorkoutEquipmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkoutEquipmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WorkoutEquipmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkoutEquipment"
    objects: {
      exercises: Prisma.$ExercisePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      type: $Enums.EquipmentType
      category: $Enums.EquipmentCategory
      location: $Enums.EquipmentLocation
    }, ExtArgs["result"]["workoutEquipment"]>
    composites: {}
  }

  type WorkoutEquipmentGetPayload<S extends boolean | null | undefined | WorkoutEquipmentDefaultArgs> = $Result.GetResult<Prisma.$WorkoutEquipmentPayload, S>

  type WorkoutEquipmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WorkoutEquipmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WorkoutEquipmentCountAggregateInputType | true
    }

  export interface WorkoutEquipmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkoutEquipment'], meta: { name: 'WorkoutEquipment' } }
    /**
     * Find zero or one WorkoutEquipment that matches the filter.
     * @param {WorkoutEquipmentFindUniqueArgs} args - Arguments to find a WorkoutEquipment
     * @example
     * // Get one WorkoutEquipment
     * const workoutEquipment = await prisma.workoutEquipment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutEquipmentFindUniqueArgs>(args: SelectSubset<T, WorkoutEquipmentFindUniqueArgs<ExtArgs>>): Prisma__WorkoutEquipmentClient<$Result.GetResult<Prisma.$WorkoutEquipmentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WorkoutEquipment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WorkoutEquipmentFindUniqueOrThrowArgs} args - Arguments to find a WorkoutEquipment
     * @example
     * // Get one WorkoutEquipment
     * const workoutEquipment = await prisma.workoutEquipment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutEquipmentFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutEquipmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutEquipmentClient<$Result.GetResult<Prisma.$WorkoutEquipmentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WorkoutEquipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutEquipmentFindFirstArgs} args - Arguments to find a WorkoutEquipment
     * @example
     * // Get one WorkoutEquipment
     * const workoutEquipment = await prisma.workoutEquipment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutEquipmentFindFirstArgs>(args?: SelectSubset<T, WorkoutEquipmentFindFirstArgs<ExtArgs>>): Prisma__WorkoutEquipmentClient<$Result.GetResult<Prisma.$WorkoutEquipmentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WorkoutEquipment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutEquipmentFindFirstOrThrowArgs} args - Arguments to find a WorkoutEquipment
     * @example
     * // Get one WorkoutEquipment
     * const workoutEquipment = await prisma.workoutEquipment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutEquipmentFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutEquipmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutEquipmentClient<$Result.GetResult<Prisma.$WorkoutEquipmentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WorkoutEquipments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutEquipmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkoutEquipments
     * const workoutEquipments = await prisma.workoutEquipment.findMany()
     * 
     * // Get first 10 WorkoutEquipments
     * const workoutEquipments = await prisma.workoutEquipment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutEquipmentWithIdOnly = await prisma.workoutEquipment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutEquipmentFindManyArgs>(args?: SelectSubset<T, WorkoutEquipmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutEquipmentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WorkoutEquipment.
     * @param {WorkoutEquipmentCreateArgs} args - Arguments to create a WorkoutEquipment.
     * @example
     * // Create one WorkoutEquipment
     * const WorkoutEquipment = await prisma.workoutEquipment.create({
     *   data: {
     *     // ... data to create a WorkoutEquipment
     *   }
     * })
     * 
     */
    create<T extends WorkoutEquipmentCreateArgs>(args: SelectSubset<T, WorkoutEquipmentCreateArgs<ExtArgs>>): Prisma__WorkoutEquipmentClient<$Result.GetResult<Prisma.$WorkoutEquipmentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WorkoutEquipments.
     * @param {WorkoutEquipmentCreateManyArgs} args - Arguments to create many WorkoutEquipments.
     * @example
     * // Create many WorkoutEquipments
     * const workoutEquipment = await prisma.workoutEquipment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutEquipmentCreateManyArgs>(args?: SelectSubset<T, WorkoutEquipmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkoutEquipments and returns the data saved in the database.
     * @param {WorkoutEquipmentCreateManyAndReturnArgs} args - Arguments to create many WorkoutEquipments.
     * @example
     * // Create many WorkoutEquipments
     * const workoutEquipment = await prisma.workoutEquipment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkoutEquipments and only return the `id`
     * const workoutEquipmentWithIdOnly = await prisma.workoutEquipment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutEquipmentCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutEquipmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutEquipmentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WorkoutEquipment.
     * @param {WorkoutEquipmentDeleteArgs} args - Arguments to delete one WorkoutEquipment.
     * @example
     * // Delete one WorkoutEquipment
     * const WorkoutEquipment = await prisma.workoutEquipment.delete({
     *   where: {
     *     // ... filter to delete one WorkoutEquipment
     *   }
     * })
     * 
     */
    delete<T extends WorkoutEquipmentDeleteArgs>(args: SelectSubset<T, WorkoutEquipmentDeleteArgs<ExtArgs>>): Prisma__WorkoutEquipmentClient<$Result.GetResult<Prisma.$WorkoutEquipmentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WorkoutEquipment.
     * @param {WorkoutEquipmentUpdateArgs} args - Arguments to update one WorkoutEquipment.
     * @example
     * // Update one WorkoutEquipment
     * const workoutEquipment = await prisma.workoutEquipment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutEquipmentUpdateArgs>(args: SelectSubset<T, WorkoutEquipmentUpdateArgs<ExtArgs>>): Prisma__WorkoutEquipmentClient<$Result.GetResult<Prisma.$WorkoutEquipmentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WorkoutEquipments.
     * @param {WorkoutEquipmentDeleteManyArgs} args - Arguments to filter WorkoutEquipments to delete.
     * @example
     * // Delete a few WorkoutEquipments
     * const { count } = await prisma.workoutEquipment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutEquipmentDeleteManyArgs>(args?: SelectSubset<T, WorkoutEquipmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutEquipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutEquipmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkoutEquipments
     * const workoutEquipment = await prisma.workoutEquipment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutEquipmentUpdateManyArgs>(args: SelectSubset<T, WorkoutEquipmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkoutEquipment.
     * @param {WorkoutEquipmentUpsertArgs} args - Arguments to update or create a WorkoutEquipment.
     * @example
     * // Update or create a WorkoutEquipment
     * const workoutEquipment = await prisma.workoutEquipment.upsert({
     *   create: {
     *     // ... data to create a WorkoutEquipment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkoutEquipment we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutEquipmentUpsertArgs>(args: SelectSubset<T, WorkoutEquipmentUpsertArgs<ExtArgs>>): Prisma__WorkoutEquipmentClient<$Result.GetResult<Prisma.$WorkoutEquipmentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WorkoutEquipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutEquipmentCountArgs} args - Arguments to filter WorkoutEquipments to count.
     * @example
     * // Count the number of WorkoutEquipments
     * const count = await prisma.workoutEquipment.count({
     *   where: {
     *     // ... the filter for the WorkoutEquipments we want to count
     *   }
     * })
    **/
    count<T extends WorkoutEquipmentCountArgs>(
      args?: Subset<T, WorkoutEquipmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutEquipmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkoutEquipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutEquipmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkoutEquipmentAggregateArgs>(args: Subset<T, WorkoutEquipmentAggregateArgs>): Prisma.PrismaPromise<GetWorkoutEquipmentAggregateType<T>>

    /**
     * Group by WorkoutEquipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutEquipmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkoutEquipmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutEquipmentGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutEquipmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkoutEquipmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutEquipmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkoutEquipment model
   */
  readonly fields: WorkoutEquipmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkoutEquipment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutEquipmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exercises<T extends WorkoutEquipment$exercisesArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutEquipment$exercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkoutEquipment model
   */ 
  interface WorkoutEquipmentFieldRefs {
    readonly id: FieldRef<"WorkoutEquipment", 'Int'>
    readonly name: FieldRef<"WorkoutEquipment", 'String'>
    readonly type: FieldRef<"WorkoutEquipment", 'EquipmentType'>
    readonly category: FieldRef<"WorkoutEquipment", 'EquipmentCategory'>
    readonly location: FieldRef<"WorkoutEquipment", 'EquipmentLocation'>
  }
    

  // Custom InputTypes
  /**
   * WorkoutEquipment findUnique
   */
  export type WorkoutEquipmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutEquipment
     */
    select?: WorkoutEquipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutEquipmentInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutEquipment to fetch.
     */
    where: WorkoutEquipmentWhereUniqueInput
  }

  /**
   * WorkoutEquipment findUniqueOrThrow
   */
  export type WorkoutEquipmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutEquipment
     */
    select?: WorkoutEquipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutEquipmentInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutEquipment to fetch.
     */
    where: WorkoutEquipmentWhereUniqueInput
  }

  /**
   * WorkoutEquipment findFirst
   */
  export type WorkoutEquipmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutEquipment
     */
    select?: WorkoutEquipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutEquipmentInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutEquipment to fetch.
     */
    where?: WorkoutEquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutEquipments to fetch.
     */
    orderBy?: WorkoutEquipmentOrderByWithRelationInput | WorkoutEquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutEquipments.
     */
    cursor?: WorkoutEquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutEquipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutEquipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutEquipments.
     */
    distinct?: WorkoutEquipmentScalarFieldEnum | WorkoutEquipmentScalarFieldEnum[]
  }

  /**
   * WorkoutEquipment findFirstOrThrow
   */
  export type WorkoutEquipmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutEquipment
     */
    select?: WorkoutEquipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutEquipmentInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutEquipment to fetch.
     */
    where?: WorkoutEquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutEquipments to fetch.
     */
    orderBy?: WorkoutEquipmentOrderByWithRelationInput | WorkoutEquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutEquipments.
     */
    cursor?: WorkoutEquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutEquipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutEquipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutEquipments.
     */
    distinct?: WorkoutEquipmentScalarFieldEnum | WorkoutEquipmentScalarFieldEnum[]
  }

  /**
   * WorkoutEquipment findMany
   */
  export type WorkoutEquipmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutEquipment
     */
    select?: WorkoutEquipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutEquipmentInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutEquipments to fetch.
     */
    where?: WorkoutEquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutEquipments to fetch.
     */
    orderBy?: WorkoutEquipmentOrderByWithRelationInput | WorkoutEquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkoutEquipments.
     */
    cursor?: WorkoutEquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutEquipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutEquipments.
     */
    skip?: number
    distinct?: WorkoutEquipmentScalarFieldEnum | WorkoutEquipmentScalarFieldEnum[]
  }

  /**
   * WorkoutEquipment create
   */
  export type WorkoutEquipmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutEquipment
     */
    select?: WorkoutEquipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutEquipmentInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkoutEquipment.
     */
    data: XOR<WorkoutEquipmentCreateInput, WorkoutEquipmentUncheckedCreateInput>
  }

  /**
   * WorkoutEquipment createMany
   */
  export type WorkoutEquipmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkoutEquipments.
     */
    data: WorkoutEquipmentCreateManyInput | WorkoutEquipmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkoutEquipment createManyAndReturn
   */
  export type WorkoutEquipmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutEquipment
     */
    select?: WorkoutEquipmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WorkoutEquipments.
     */
    data: WorkoutEquipmentCreateManyInput | WorkoutEquipmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkoutEquipment update
   */
  export type WorkoutEquipmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutEquipment
     */
    select?: WorkoutEquipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutEquipmentInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkoutEquipment.
     */
    data: XOR<WorkoutEquipmentUpdateInput, WorkoutEquipmentUncheckedUpdateInput>
    /**
     * Choose, which WorkoutEquipment to update.
     */
    where: WorkoutEquipmentWhereUniqueInput
  }

  /**
   * WorkoutEquipment updateMany
   */
  export type WorkoutEquipmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkoutEquipments.
     */
    data: XOR<WorkoutEquipmentUpdateManyMutationInput, WorkoutEquipmentUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutEquipments to update
     */
    where?: WorkoutEquipmentWhereInput
  }

  /**
   * WorkoutEquipment upsert
   */
  export type WorkoutEquipmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutEquipment
     */
    select?: WorkoutEquipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutEquipmentInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkoutEquipment to update in case it exists.
     */
    where: WorkoutEquipmentWhereUniqueInput
    /**
     * In case the WorkoutEquipment found by the `where` argument doesn't exist, create a new WorkoutEquipment with this data.
     */
    create: XOR<WorkoutEquipmentCreateInput, WorkoutEquipmentUncheckedCreateInput>
    /**
     * In case the WorkoutEquipment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutEquipmentUpdateInput, WorkoutEquipmentUncheckedUpdateInput>
  }

  /**
   * WorkoutEquipment delete
   */
  export type WorkoutEquipmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutEquipment
     */
    select?: WorkoutEquipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutEquipmentInclude<ExtArgs> | null
    /**
     * Filter which WorkoutEquipment to delete.
     */
    where: WorkoutEquipmentWhereUniqueInput
  }

  /**
   * WorkoutEquipment deleteMany
   */
  export type WorkoutEquipmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutEquipments to delete
     */
    where?: WorkoutEquipmentWhereInput
  }

  /**
   * WorkoutEquipment.exercises
   */
  export type WorkoutEquipment$exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    where?: ExerciseWhereInput
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    cursor?: ExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * WorkoutEquipment without action
   */
  export type WorkoutEquipmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutEquipment
     */
    select?: WorkoutEquipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutEquipmentInclude<ExtArgs> | null
  }


  /**
   * Model Workout
   */

  export type AggregateWorkout = {
    _count: WorkoutCountAggregateOutputType | null
    _avg: WorkoutAvgAggregateOutputType | null
    _sum: WorkoutSumAggregateOutputType | null
    _min: WorkoutMinAggregateOutputType | null
    _max: WorkoutMaxAggregateOutputType | null
  }

  export type WorkoutAvgAggregateOutputType = {
    id: number | null
  }

  export type WorkoutSumAggregateOutputType = {
    id: number | null
  }

  export type WorkoutMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkoutMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkoutCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkoutAvgAggregateInputType = {
    id?: true
  }

  export type WorkoutSumAggregateInputType = {
    id?: true
  }

  export type WorkoutMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkoutMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkoutCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkoutAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workout to aggregate.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workouts
    **/
    _count?: true | WorkoutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkoutAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkoutSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutMaxAggregateInputType
  }

  export type GetWorkoutAggregateType<T extends WorkoutAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkout]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkout[P]>
      : GetScalarType<T[P], AggregateWorkout[P]>
  }




  export type WorkoutGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutWhereInput
    orderBy?: WorkoutOrderByWithAggregationInput | WorkoutOrderByWithAggregationInput[]
    by: WorkoutScalarFieldEnum[] | WorkoutScalarFieldEnum
    having?: WorkoutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutCountAggregateInputType | true
    _avg?: WorkoutAvgAggregateInputType
    _sum?: WorkoutSumAggregateInputType
    _min?: WorkoutMinAggregateInputType
    _max?: WorkoutMaxAggregateInputType
  }

  export type WorkoutGroupByOutputType = {
    id: number
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: WorkoutCountAggregateOutputType | null
    _avg: WorkoutAvgAggregateOutputType | null
    _sum: WorkoutSumAggregateOutputType | null
    _min: WorkoutMinAggregateOutputType | null
    _max: WorkoutMaxAggregateOutputType | null
  }

  type GetWorkoutGroupByPayload<T extends WorkoutGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    WorkoutExercise?: boolean | Workout$WorkoutExerciseArgs<ExtArgs>
    _count?: boolean | WorkoutCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout"]>

  export type WorkoutSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["workout"]>

  export type WorkoutSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkoutInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    WorkoutExercise?: boolean | Workout$WorkoutExerciseArgs<ExtArgs>
    _count?: boolean | WorkoutCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkoutIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WorkoutPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workout"
    objects: {
      WorkoutExercise: Prisma.$WorkoutExercisePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workout"]>
    composites: {}
  }

  type WorkoutGetPayload<S extends boolean | null | undefined | WorkoutDefaultArgs> = $Result.GetResult<Prisma.$WorkoutPayload, S>

  type WorkoutCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WorkoutFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WorkoutCountAggregateInputType | true
    }

  export interface WorkoutDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workout'], meta: { name: 'Workout' } }
    /**
     * Find zero or one Workout that matches the filter.
     * @param {WorkoutFindUniqueArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutFindUniqueArgs>(args: SelectSubset<T, WorkoutFindUniqueArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Workout that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WorkoutFindUniqueOrThrowArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Workout that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindFirstArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutFindFirstArgs>(args?: SelectSubset<T, WorkoutFindFirstArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Workout that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindFirstOrThrowArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Workouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workouts
     * const workouts = await prisma.workout.findMany()
     * 
     * // Get first 10 Workouts
     * const workouts = await prisma.workout.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutWithIdOnly = await prisma.workout.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutFindManyArgs>(args?: SelectSubset<T, WorkoutFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Workout.
     * @param {WorkoutCreateArgs} args - Arguments to create a Workout.
     * @example
     * // Create one Workout
     * const Workout = await prisma.workout.create({
     *   data: {
     *     // ... data to create a Workout
     *   }
     * })
     * 
     */
    create<T extends WorkoutCreateArgs>(args: SelectSubset<T, WorkoutCreateArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Workouts.
     * @param {WorkoutCreateManyArgs} args - Arguments to create many Workouts.
     * @example
     * // Create many Workouts
     * const workout = await prisma.workout.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutCreateManyArgs>(args?: SelectSubset<T, WorkoutCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workouts and returns the data saved in the database.
     * @param {WorkoutCreateManyAndReturnArgs} args - Arguments to create many Workouts.
     * @example
     * // Create many Workouts
     * const workout = await prisma.workout.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workouts and only return the `id`
     * const workoutWithIdOnly = await prisma.workout.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Workout.
     * @param {WorkoutDeleteArgs} args - Arguments to delete one Workout.
     * @example
     * // Delete one Workout
     * const Workout = await prisma.workout.delete({
     *   where: {
     *     // ... filter to delete one Workout
     *   }
     * })
     * 
     */
    delete<T extends WorkoutDeleteArgs>(args: SelectSubset<T, WorkoutDeleteArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Workout.
     * @param {WorkoutUpdateArgs} args - Arguments to update one Workout.
     * @example
     * // Update one Workout
     * const workout = await prisma.workout.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutUpdateArgs>(args: SelectSubset<T, WorkoutUpdateArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Workouts.
     * @param {WorkoutDeleteManyArgs} args - Arguments to filter Workouts to delete.
     * @example
     * // Delete a few Workouts
     * const { count } = await prisma.workout.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutDeleteManyArgs>(args?: SelectSubset<T, WorkoutDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workouts
     * const workout = await prisma.workout.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutUpdateManyArgs>(args: SelectSubset<T, WorkoutUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Workout.
     * @param {WorkoutUpsertArgs} args - Arguments to update or create a Workout.
     * @example
     * // Update or create a Workout
     * const workout = await prisma.workout.upsert({
     *   create: {
     *     // ... data to create a Workout
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workout we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutUpsertArgs>(args: SelectSubset<T, WorkoutUpsertArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Workouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutCountArgs} args - Arguments to filter Workouts to count.
     * @example
     * // Count the number of Workouts
     * const count = await prisma.workout.count({
     *   where: {
     *     // ... the filter for the Workouts we want to count
     *   }
     * })
    **/
    count<T extends WorkoutCountArgs>(
      args?: Subset<T, WorkoutCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkoutAggregateArgs>(args: Subset<T, WorkoutAggregateArgs>): Prisma.PrismaPromise<GetWorkoutAggregateType<T>>

    /**
     * Group by Workout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkoutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkoutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workout model
   */
  readonly fields: WorkoutFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workout.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    WorkoutExercise<T extends Workout$WorkoutExerciseArgs<ExtArgs> = {}>(args?: Subset<T, Workout$WorkoutExerciseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Workout model
   */ 
  interface WorkoutFieldRefs {
    readonly id: FieldRef<"Workout", 'Int'>
    readonly name: FieldRef<"Workout", 'String'>
    readonly description: FieldRef<"Workout", 'String'>
    readonly createdAt: FieldRef<"Workout", 'DateTime'>
    readonly updatedAt: FieldRef<"Workout", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Workout findUnique
   */
  export type WorkoutFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout findUniqueOrThrow
   */
  export type WorkoutFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout findFirst
   */
  export type WorkoutFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workouts.
     */
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout findFirstOrThrow
   */
  export type WorkoutFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workouts.
     */
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout findMany
   */
  export type WorkoutFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workouts to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout create
   */
  export type WorkoutCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The data needed to create a Workout.
     */
    data: XOR<WorkoutCreateInput, WorkoutUncheckedCreateInput>
  }

  /**
   * Workout createMany
   */
  export type WorkoutCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workouts.
     */
    data: WorkoutCreateManyInput | WorkoutCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workout createManyAndReturn
   */
  export type WorkoutCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Workouts.
     */
    data: WorkoutCreateManyInput | WorkoutCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workout update
   */
  export type WorkoutUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The data needed to update a Workout.
     */
    data: XOR<WorkoutUpdateInput, WorkoutUncheckedUpdateInput>
    /**
     * Choose, which Workout to update.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout updateMany
   */
  export type WorkoutUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workouts.
     */
    data: XOR<WorkoutUpdateManyMutationInput, WorkoutUncheckedUpdateManyInput>
    /**
     * Filter which Workouts to update
     */
    where?: WorkoutWhereInput
  }

  /**
   * Workout upsert
   */
  export type WorkoutUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The filter to search for the Workout to update in case it exists.
     */
    where: WorkoutWhereUniqueInput
    /**
     * In case the Workout found by the `where` argument doesn't exist, create a new Workout with this data.
     */
    create: XOR<WorkoutCreateInput, WorkoutUncheckedCreateInput>
    /**
     * In case the Workout was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutUpdateInput, WorkoutUncheckedUpdateInput>
  }

  /**
   * Workout delete
   */
  export type WorkoutDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter which Workout to delete.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout deleteMany
   */
  export type WorkoutDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workouts to delete
     */
    where?: WorkoutWhereInput
  }

  /**
   * Workout.WorkoutExercise
   */
  export type Workout$WorkoutExerciseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    where?: WorkoutExerciseWhereInput
    orderBy?: WorkoutExerciseOrderByWithRelationInput | WorkoutExerciseOrderByWithRelationInput[]
    cursor?: WorkoutExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutExerciseScalarFieldEnum | WorkoutExerciseScalarFieldEnum[]
  }

  /**
   * Workout without action
   */
  export type WorkoutDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
  }


  /**
   * Model WorkoutExercise
   */

  export type AggregateWorkoutExercise = {
    _count: WorkoutExerciseCountAggregateOutputType | null
    _avg: WorkoutExerciseAvgAggregateOutputType | null
    _sum: WorkoutExerciseSumAggregateOutputType | null
    _min: WorkoutExerciseMinAggregateOutputType | null
    _max: WorkoutExerciseMaxAggregateOutputType | null
  }

  export type WorkoutExerciseAvgAggregateOutputType = {
    id: number | null
    workoutId: number | null
    exerciseId: number | null
    order: number | null
    sets: number | null
    reps: number | null
    weight: number | null
    minutesToComplete: number | null
    restBetweenSets: number | null
  }

  export type WorkoutExerciseSumAggregateOutputType = {
    id: number | null
    workoutId: number | null
    exerciseId: number | null
    order: number | null
    sets: number | null
    reps: number | null
    weight: number | null
    minutesToComplete: number | null
    restBetweenSets: number | null
  }

  export type WorkoutExerciseMinAggregateOutputType = {
    id: number | null
    workoutId: number | null
    exerciseId: number | null
    order: number | null
    sets: number | null
    reps: number | null
    weight: number | null
    minutesToComplete: number | null
    restBetweenSets: number | null
    notes: string | null
  }

  export type WorkoutExerciseMaxAggregateOutputType = {
    id: number | null
    workoutId: number | null
    exerciseId: number | null
    order: number | null
    sets: number | null
    reps: number | null
    weight: number | null
    minutesToComplete: number | null
    restBetweenSets: number | null
    notes: string | null
  }

  export type WorkoutExerciseCountAggregateOutputType = {
    id: number
    workoutId: number
    exerciseId: number
    order: number
    sets: number
    reps: number
    weight: number
    minutesToComplete: number
    restBetweenSets: number
    notes: number
    _all: number
  }


  export type WorkoutExerciseAvgAggregateInputType = {
    id?: true
    workoutId?: true
    exerciseId?: true
    order?: true
    sets?: true
    reps?: true
    weight?: true
    minutesToComplete?: true
    restBetweenSets?: true
  }

  export type WorkoutExerciseSumAggregateInputType = {
    id?: true
    workoutId?: true
    exerciseId?: true
    order?: true
    sets?: true
    reps?: true
    weight?: true
    minutesToComplete?: true
    restBetweenSets?: true
  }

  export type WorkoutExerciseMinAggregateInputType = {
    id?: true
    workoutId?: true
    exerciseId?: true
    order?: true
    sets?: true
    reps?: true
    weight?: true
    minutesToComplete?: true
    restBetweenSets?: true
    notes?: true
  }

  export type WorkoutExerciseMaxAggregateInputType = {
    id?: true
    workoutId?: true
    exerciseId?: true
    order?: true
    sets?: true
    reps?: true
    weight?: true
    minutesToComplete?: true
    restBetweenSets?: true
    notes?: true
  }

  export type WorkoutExerciseCountAggregateInputType = {
    id?: true
    workoutId?: true
    exerciseId?: true
    order?: true
    sets?: true
    reps?: true
    weight?: true
    minutesToComplete?: true
    restBetweenSets?: true
    notes?: true
    _all?: true
  }

  export type WorkoutExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutExercise to aggregate.
     */
    where?: WorkoutExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutExercises to fetch.
     */
    orderBy?: WorkoutExerciseOrderByWithRelationInput | WorkoutExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkoutExercises
    **/
    _count?: true | WorkoutExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkoutExerciseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkoutExerciseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutExerciseMaxAggregateInputType
  }

  export type GetWorkoutExerciseAggregateType<T extends WorkoutExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkoutExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkoutExercise[P]>
      : GetScalarType<T[P], AggregateWorkoutExercise[P]>
  }




  export type WorkoutExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutExerciseWhereInput
    orderBy?: WorkoutExerciseOrderByWithAggregationInput | WorkoutExerciseOrderByWithAggregationInput[]
    by: WorkoutExerciseScalarFieldEnum[] | WorkoutExerciseScalarFieldEnum
    having?: WorkoutExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutExerciseCountAggregateInputType | true
    _avg?: WorkoutExerciseAvgAggregateInputType
    _sum?: WorkoutExerciseSumAggregateInputType
    _min?: WorkoutExerciseMinAggregateInputType
    _max?: WorkoutExerciseMaxAggregateInputType
  }

  export type WorkoutExerciseGroupByOutputType = {
    id: number
    workoutId: number
    exerciseId: number
    order: number
    sets: number
    reps: number
    weight: number
    minutesToComplete: number
    restBetweenSets: number
    notes: string | null
    _count: WorkoutExerciseCountAggregateOutputType | null
    _avg: WorkoutExerciseAvgAggregateOutputType | null
    _sum: WorkoutExerciseSumAggregateOutputType | null
    _min: WorkoutExerciseMinAggregateOutputType | null
    _max: WorkoutExerciseMaxAggregateOutputType | null
  }

  type GetWorkoutExerciseGroupByPayload<T extends WorkoutExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutExerciseGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workoutId?: boolean
    exerciseId?: boolean
    order?: boolean
    sets?: boolean
    reps?: boolean
    weight?: boolean
    minutesToComplete?: boolean
    restBetweenSets?: boolean
    notes?: boolean
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutExercise"]>

  export type WorkoutExerciseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workoutId?: boolean
    exerciseId?: boolean
    order?: boolean
    sets?: boolean
    reps?: boolean
    weight?: boolean
    minutesToComplete?: boolean
    restBetweenSets?: boolean
    notes?: boolean
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutExercise"]>

  export type WorkoutExerciseSelectScalar = {
    id?: boolean
    workoutId?: boolean
    exerciseId?: boolean
    order?: boolean
    sets?: boolean
    reps?: boolean
    weight?: boolean
    minutesToComplete?: boolean
    restBetweenSets?: boolean
    notes?: boolean
  }

  export type WorkoutExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }
  export type WorkoutExerciseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }

  export type $WorkoutExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkoutExercise"
    objects: {
      workout: Prisma.$WorkoutPayload<ExtArgs>
      exercise: Prisma.$ExercisePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      workoutId: number
      exerciseId: number
      order: number
      sets: number
      reps: number
      weight: number
      minutesToComplete: number
      restBetweenSets: number
      notes: string | null
    }, ExtArgs["result"]["workoutExercise"]>
    composites: {}
  }

  type WorkoutExerciseGetPayload<S extends boolean | null | undefined | WorkoutExerciseDefaultArgs> = $Result.GetResult<Prisma.$WorkoutExercisePayload, S>

  type WorkoutExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WorkoutExerciseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WorkoutExerciseCountAggregateInputType | true
    }

  export interface WorkoutExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkoutExercise'], meta: { name: 'WorkoutExercise' } }
    /**
     * Find zero or one WorkoutExercise that matches the filter.
     * @param {WorkoutExerciseFindUniqueArgs} args - Arguments to find a WorkoutExercise
     * @example
     * // Get one WorkoutExercise
     * const workoutExercise = await prisma.workoutExercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutExerciseFindUniqueArgs>(args: SelectSubset<T, WorkoutExerciseFindUniqueArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WorkoutExercise that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WorkoutExerciseFindUniqueOrThrowArgs} args - Arguments to find a WorkoutExercise
     * @example
     * // Get one WorkoutExercise
     * const workoutExercise = await prisma.workoutExercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutExerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutExerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WorkoutExercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExerciseFindFirstArgs} args - Arguments to find a WorkoutExercise
     * @example
     * // Get one WorkoutExercise
     * const workoutExercise = await prisma.workoutExercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutExerciseFindFirstArgs>(args?: SelectSubset<T, WorkoutExerciseFindFirstArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WorkoutExercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExerciseFindFirstOrThrowArgs} args - Arguments to find a WorkoutExercise
     * @example
     * // Get one WorkoutExercise
     * const workoutExercise = await prisma.workoutExercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutExerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutExerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WorkoutExercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkoutExercises
     * const workoutExercises = await prisma.workoutExercise.findMany()
     * 
     * // Get first 10 WorkoutExercises
     * const workoutExercises = await prisma.workoutExercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutExerciseWithIdOnly = await prisma.workoutExercise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutExerciseFindManyArgs>(args?: SelectSubset<T, WorkoutExerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WorkoutExercise.
     * @param {WorkoutExerciseCreateArgs} args - Arguments to create a WorkoutExercise.
     * @example
     * // Create one WorkoutExercise
     * const WorkoutExercise = await prisma.workoutExercise.create({
     *   data: {
     *     // ... data to create a WorkoutExercise
     *   }
     * })
     * 
     */
    create<T extends WorkoutExerciseCreateArgs>(args: SelectSubset<T, WorkoutExerciseCreateArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WorkoutExercises.
     * @param {WorkoutExerciseCreateManyArgs} args - Arguments to create many WorkoutExercises.
     * @example
     * // Create many WorkoutExercises
     * const workoutExercise = await prisma.workoutExercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutExerciseCreateManyArgs>(args?: SelectSubset<T, WorkoutExerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkoutExercises and returns the data saved in the database.
     * @param {WorkoutExerciseCreateManyAndReturnArgs} args - Arguments to create many WorkoutExercises.
     * @example
     * // Create many WorkoutExercises
     * const workoutExercise = await prisma.workoutExercise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkoutExercises and only return the `id`
     * const workoutExerciseWithIdOnly = await prisma.workoutExercise.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutExerciseCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutExerciseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WorkoutExercise.
     * @param {WorkoutExerciseDeleteArgs} args - Arguments to delete one WorkoutExercise.
     * @example
     * // Delete one WorkoutExercise
     * const WorkoutExercise = await prisma.workoutExercise.delete({
     *   where: {
     *     // ... filter to delete one WorkoutExercise
     *   }
     * })
     * 
     */
    delete<T extends WorkoutExerciseDeleteArgs>(args: SelectSubset<T, WorkoutExerciseDeleteArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WorkoutExercise.
     * @param {WorkoutExerciseUpdateArgs} args - Arguments to update one WorkoutExercise.
     * @example
     * // Update one WorkoutExercise
     * const workoutExercise = await prisma.workoutExercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutExerciseUpdateArgs>(args: SelectSubset<T, WorkoutExerciseUpdateArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WorkoutExercises.
     * @param {WorkoutExerciseDeleteManyArgs} args - Arguments to filter WorkoutExercises to delete.
     * @example
     * // Delete a few WorkoutExercises
     * const { count } = await prisma.workoutExercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutExerciseDeleteManyArgs>(args?: SelectSubset<T, WorkoutExerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkoutExercises
     * const workoutExercise = await prisma.workoutExercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutExerciseUpdateManyArgs>(args: SelectSubset<T, WorkoutExerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkoutExercise.
     * @param {WorkoutExerciseUpsertArgs} args - Arguments to update or create a WorkoutExercise.
     * @example
     * // Update or create a WorkoutExercise
     * const workoutExercise = await prisma.workoutExercise.upsert({
     *   create: {
     *     // ... data to create a WorkoutExercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkoutExercise we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutExerciseUpsertArgs>(args: SelectSubset<T, WorkoutExerciseUpsertArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WorkoutExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExerciseCountArgs} args - Arguments to filter WorkoutExercises to count.
     * @example
     * // Count the number of WorkoutExercises
     * const count = await prisma.workoutExercise.count({
     *   where: {
     *     // ... the filter for the WorkoutExercises we want to count
     *   }
     * })
    **/
    count<T extends WorkoutExerciseCountArgs>(
      args?: Subset<T, WorkoutExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkoutExercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkoutExerciseAggregateArgs>(args: Subset<T, WorkoutExerciseAggregateArgs>): Prisma.PrismaPromise<GetWorkoutExerciseAggregateType<T>>

    /**
     * Group by WorkoutExercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExerciseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkoutExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutExerciseGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutExerciseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkoutExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkoutExercise model
   */
  readonly fields: WorkoutExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkoutExercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workout<T extends WorkoutDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutDefaultArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    exercise<T extends ExerciseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseDefaultArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkoutExercise model
   */ 
  interface WorkoutExerciseFieldRefs {
    readonly id: FieldRef<"WorkoutExercise", 'Int'>
    readonly workoutId: FieldRef<"WorkoutExercise", 'Int'>
    readonly exerciseId: FieldRef<"WorkoutExercise", 'Int'>
    readonly order: FieldRef<"WorkoutExercise", 'Int'>
    readonly sets: FieldRef<"WorkoutExercise", 'Int'>
    readonly reps: FieldRef<"WorkoutExercise", 'Int'>
    readonly weight: FieldRef<"WorkoutExercise", 'Float'>
    readonly minutesToComplete: FieldRef<"WorkoutExercise", 'Int'>
    readonly restBetweenSets: FieldRef<"WorkoutExercise", 'Int'>
    readonly notes: FieldRef<"WorkoutExercise", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WorkoutExercise findUnique
   */
  export type WorkoutExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercise to fetch.
     */
    where: WorkoutExerciseWhereUniqueInput
  }

  /**
   * WorkoutExercise findUniqueOrThrow
   */
  export type WorkoutExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercise to fetch.
     */
    where: WorkoutExerciseWhereUniqueInput
  }

  /**
   * WorkoutExercise findFirst
   */
  export type WorkoutExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercise to fetch.
     */
    where?: WorkoutExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutExercises to fetch.
     */
    orderBy?: WorkoutExerciseOrderByWithRelationInput | WorkoutExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutExercises.
     */
    cursor?: WorkoutExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutExercises.
     */
    distinct?: WorkoutExerciseScalarFieldEnum | WorkoutExerciseScalarFieldEnum[]
  }

  /**
   * WorkoutExercise findFirstOrThrow
   */
  export type WorkoutExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercise to fetch.
     */
    where?: WorkoutExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutExercises to fetch.
     */
    orderBy?: WorkoutExerciseOrderByWithRelationInput | WorkoutExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutExercises.
     */
    cursor?: WorkoutExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutExercises.
     */
    distinct?: WorkoutExerciseScalarFieldEnum | WorkoutExerciseScalarFieldEnum[]
  }

  /**
   * WorkoutExercise findMany
   */
  export type WorkoutExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercises to fetch.
     */
    where?: WorkoutExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutExercises to fetch.
     */
    orderBy?: WorkoutExerciseOrderByWithRelationInput | WorkoutExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkoutExercises.
     */
    cursor?: WorkoutExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutExercises.
     */
    skip?: number
    distinct?: WorkoutExerciseScalarFieldEnum | WorkoutExerciseScalarFieldEnum[]
  }

  /**
   * WorkoutExercise create
   */
  export type WorkoutExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkoutExercise.
     */
    data: XOR<WorkoutExerciseCreateInput, WorkoutExerciseUncheckedCreateInput>
  }

  /**
   * WorkoutExercise createMany
   */
  export type WorkoutExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkoutExercises.
     */
    data: WorkoutExerciseCreateManyInput | WorkoutExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkoutExercise createManyAndReturn
   */
  export type WorkoutExerciseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WorkoutExercises.
     */
    data: WorkoutExerciseCreateManyInput | WorkoutExerciseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutExercise update
   */
  export type WorkoutExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkoutExercise.
     */
    data: XOR<WorkoutExerciseUpdateInput, WorkoutExerciseUncheckedUpdateInput>
    /**
     * Choose, which WorkoutExercise to update.
     */
    where: WorkoutExerciseWhereUniqueInput
  }

  /**
   * WorkoutExercise updateMany
   */
  export type WorkoutExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkoutExercises.
     */
    data: XOR<WorkoutExerciseUpdateManyMutationInput, WorkoutExerciseUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutExercises to update
     */
    where?: WorkoutExerciseWhereInput
  }

  /**
   * WorkoutExercise upsert
   */
  export type WorkoutExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkoutExercise to update in case it exists.
     */
    where: WorkoutExerciseWhereUniqueInput
    /**
     * In case the WorkoutExercise found by the `where` argument doesn't exist, create a new WorkoutExercise with this data.
     */
    create: XOR<WorkoutExerciseCreateInput, WorkoutExerciseUncheckedCreateInput>
    /**
     * In case the WorkoutExercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutExerciseUpdateInput, WorkoutExerciseUncheckedUpdateInput>
  }

  /**
   * WorkoutExercise delete
   */
  export type WorkoutExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * Filter which WorkoutExercise to delete.
     */
    where: WorkoutExerciseWhereUniqueInput
  }

  /**
   * WorkoutExercise deleteMany
   */
  export type WorkoutExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutExercises to delete
     */
    where?: WorkoutExerciseWhereInput
  }

  /**
   * WorkoutExercise without action
   */
  export type WorkoutExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ExerciseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    primaryMuscleId: 'primaryMuscleId',
    secondaryMuscleId: 'secondaryMuscleId',
    equipmentId: 'equipmentId',
    difficulty: 'difficulty',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExerciseScalarFieldEnum = (typeof ExerciseScalarFieldEnum)[keyof typeof ExerciseScalarFieldEnum]


  export const MuscleTypeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type MuscleTypeScalarFieldEnum = (typeof MuscleTypeScalarFieldEnum)[keyof typeof MuscleTypeScalarFieldEnum]


  export const WorkoutEquipmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    category: 'category',
    location: 'location'
  };

  export type WorkoutEquipmentScalarFieldEnum = (typeof WorkoutEquipmentScalarFieldEnum)[keyof typeof WorkoutEquipmentScalarFieldEnum]


  export const WorkoutScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkoutScalarFieldEnum = (typeof WorkoutScalarFieldEnum)[keyof typeof WorkoutScalarFieldEnum]


  export const WorkoutExerciseScalarFieldEnum: {
    id: 'id',
    workoutId: 'workoutId',
    exerciseId: 'exerciseId',
    order: 'order',
    sets: 'sets',
    reps: 'reps',
    weight: 'weight',
    minutesToComplete: 'minutesToComplete',
    restBetweenSets: 'restBetweenSets',
    notes: 'notes'
  };

  export type WorkoutExerciseScalarFieldEnum = (typeof WorkoutExerciseScalarFieldEnum)[keyof typeof WorkoutExerciseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'EquipmentType'
   */
  export type EnumEquipmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EquipmentType'>
    


  /**
   * Reference to a field of type 'EquipmentType[]'
   */
  export type ListEnumEquipmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EquipmentType[]'>
    


  /**
   * Reference to a field of type 'EquipmentCategory'
   */
  export type EnumEquipmentCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EquipmentCategory'>
    


  /**
   * Reference to a field of type 'EquipmentCategory[]'
   */
  export type ListEnumEquipmentCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EquipmentCategory[]'>
    


  /**
   * Reference to a field of type 'EquipmentLocation'
   */
  export type EnumEquipmentLocationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EquipmentLocation'>
    


  /**
   * Reference to a field of type 'EquipmentLocation[]'
   */
  export type ListEnumEquipmentLocationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EquipmentLocation[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ExerciseWhereInput = {
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    id?: IntFilter<"Exercise"> | number
    name?: StringFilter<"Exercise"> | string
    description?: StringNullableFilter<"Exercise"> | string | null
    primaryMuscleId?: IntFilter<"Exercise"> | number
    secondaryMuscleId?: IntNullableFilter<"Exercise"> | number | null
    equipmentId?: IntFilter<"Exercise"> | number
    difficulty?: StringFilter<"Exercise"> | string
    createdAt?: DateTimeFilter<"Exercise"> | Date | string
    updatedAt?: DateTimeFilter<"Exercise"> | Date | string
    primaryMuscle?: XOR<MuscleTypeRelationFilter, MuscleTypeWhereInput>
    secondaryMuscle?: XOR<MuscleTypeNullableRelationFilter, MuscleTypeWhereInput> | null
    equipment?: XOR<WorkoutEquipmentRelationFilter, WorkoutEquipmentWhereInput>
    WorkoutExercise?: WorkoutExerciseListRelationFilter
  }

  export type ExerciseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    primaryMuscleId?: SortOrder
    secondaryMuscleId?: SortOrderInput | SortOrder
    equipmentId?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    primaryMuscle?: MuscleTypeOrderByWithRelationInput
    secondaryMuscle?: MuscleTypeOrderByWithRelationInput
    equipment?: WorkoutEquipmentOrderByWithRelationInput
    WorkoutExercise?: WorkoutExerciseOrderByRelationAggregateInput
  }

  export type ExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    name?: StringFilter<"Exercise"> | string
    description?: StringNullableFilter<"Exercise"> | string | null
    primaryMuscleId?: IntFilter<"Exercise"> | number
    secondaryMuscleId?: IntNullableFilter<"Exercise"> | number | null
    equipmentId?: IntFilter<"Exercise"> | number
    difficulty?: StringFilter<"Exercise"> | string
    createdAt?: DateTimeFilter<"Exercise"> | Date | string
    updatedAt?: DateTimeFilter<"Exercise"> | Date | string
    primaryMuscle?: XOR<MuscleTypeRelationFilter, MuscleTypeWhereInput>
    secondaryMuscle?: XOR<MuscleTypeNullableRelationFilter, MuscleTypeWhereInput> | null
    equipment?: XOR<WorkoutEquipmentRelationFilter, WorkoutEquipmentWhereInput>
    WorkoutExercise?: WorkoutExerciseListRelationFilter
  }, "id">

  export type ExerciseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    primaryMuscleId?: SortOrder
    secondaryMuscleId?: SortOrderInput | SortOrder
    equipmentId?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExerciseCountOrderByAggregateInput
    _avg?: ExerciseAvgOrderByAggregateInput
    _max?: ExerciseMaxOrderByAggregateInput
    _min?: ExerciseMinOrderByAggregateInput
    _sum?: ExerciseSumOrderByAggregateInput
  }

  export type ExerciseScalarWhereWithAggregatesInput = {
    AND?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    OR?: ExerciseScalarWhereWithAggregatesInput[]
    NOT?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Exercise"> | number
    name?: StringWithAggregatesFilter<"Exercise"> | string
    description?: StringNullableWithAggregatesFilter<"Exercise"> | string | null
    primaryMuscleId?: IntWithAggregatesFilter<"Exercise"> | number
    secondaryMuscleId?: IntNullableWithAggregatesFilter<"Exercise"> | number | null
    equipmentId?: IntWithAggregatesFilter<"Exercise"> | number
    difficulty?: StringWithAggregatesFilter<"Exercise"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Exercise"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Exercise"> | Date | string
  }

  export type MuscleTypeWhereInput = {
    AND?: MuscleTypeWhereInput | MuscleTypeWhereInput[]
    OR?: MuscleTypeWhereInput[]
    NOT?: MuscleTypeWhereInput | MuscleTypeWhereInput[]
    id?: IntFilter<"MuscleType"> | number
    name?: StringFilter<"MuscleType"> | string
    primaryExercises?: ExerciseListRelationFilter
    secondaryExercises?: ExerciseListRelationFilter
  }

  export type MuscleTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    primaryExercises?: ExerciseOrderByRelationAggregateInput
    secondaryExercises?: ExerciseOrderByRelationAggregateInput
  }

  export type MuscleTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: MuscleTypeWhereInput | MuscleTypeWhereInput[]
    OR?: MuscleTypeWhereInput[]
    NOT?: MuscleTypeWhereInput | MuscleTypeWhereInput[]
    primaryExercises?: ExerciseListRelationFilter
    secondaryExercises?: ExerciseListRelationFilter
  }, "id" | "name">

  export type MuscleTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: MuscleTypeCountOrderByAggregateInput
    _avg?: MuscleTypeAvgOrderByAggregateInput
    _max?: MuscleTypeMaxOrderByAggregateInput
    _min?: MuscleTypeMinOrderByAggregateInput
    _sum?: MuscleTypeSumOrderByAggregateInput
  }

  export type MuscleTypeScalarWhereWithAggregatesInput = {
    AND?: MuscleTypeScalarWhereWithAggregatesInput | MuscleTypeScalarWhereWithAggregatesInput[]
    OR?: MuscleTypeScalarWhereWithAggregatesInput[]
    NOT?: MuscleTypeScalarWhereWithAggregatesInput | MuscleTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MuscleType"> | number
    name?: StringWithAggregatesFilter<"MuscleType"> | string
  }

  export type WorkoutEquipmentWhereInput = {
    AND?: WorkoutEquipmentWhereInput | WorkoutEquipmentWhereInput[]
    OR?: WorkoutEquipmentWhereInput[]
    NOT?: WorkoutEquipmentWhereInput | WorkoutEquipmentWhereInput[]
    id?: IntFilter<"WorkoutEquipment"> | number
    name?: StringFilter<"WorkoutEquipment"> | string
    type?: EnumEquipmentTypeFilter<"WorkoutEquipment"> | $Enums.EquipmentType
    category?: EnumEquipmentCategoryFilter<"WorkoutEquipment"> | $Enums.EquipmentCategory
    location?: EnumEquipmentLocationFilter<"WorkoutEquipment"> | $Enums.EquipmentLocation
    exercises?: ExerciseListRelationFilter
  }

  export type WorkoutEquipmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    category?: SortOrder
    location?: SortOrder
    exercises?: ExerciseOrderByRelationAggregateInput
  }

  export type WorkoutEquipmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: WorkoutEquipmentWhereInput | WorkoutEquipmentWhereInput[]
    OR?: WorkoutEquipmentWhereInput[]
    NOT?: WorkoutEquipmentWhereInput | WorkoutEquipmentWhereInput[]
    type?: EnumEquipmentTypeFilter<"WorkoutEquipment"> | $Enums.EquipmentType
    category?: EnumEquipmentCategoryFilter<"WorkoutEquipment"> | $Enums.EquipmentCategory
    location?: EnumEquipmentLocationFilter<"WorkoutEquipment"> | $Enums.EquipmentLocation
    exercises?: ExerciseListRelationFilter
  }, "id" | "name">

  export type WorkoutEquipmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    category?: SortOrder
    location?: SortOrder
    _count?: WorkoutEquipmentCountOrderByAggregateInput
    _avg?: WorkoutEquipmentAvgOrderByAggregateInput
    _max?: WorkoutEquipmentMaxOrderByAggregateInput
    _min?: WorkoutEquipmentMinOrderByAggregateInput
    _sum?: WorkoutEquipmentSumOrderByAggregateInput
  }

  export type WorkoutEquipmentScalarWhereWithAggregatesInput = {
    AND?: WorkoutEquipmentScalarWhereWithAggregatesInput | WorkoutEquipmentScalarWhereWithAggregatesInput[]
    OR?: WorkoutEquipmentScalarWhereWithAggregatesInput[]
    NOT?: WorkoutEquipmentScalarWhereWithAggregatesInput | WorkoutEquipmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WorkoutEquipment"> | number
    name?: StringWithAggregatesFilter<"WorkoutEquipment"> | string
    type?: EnumEquipmentTypeWithAggregatesFilter<"WorkoutEquipment"> | $Enums.EquipmentType
    category?: EnumEquipmentCategoryWithAggregatesFilter<"WorkoutEquipment"> | $Enums.EquipmentCategory
    location?: EnumEquipmentLocationWithAggregatesFilter<"WorkoutEquipment"> | $Enums.EquipmentLocation
  }

  export type WorkoutWhereInput = {
    AND?: WorkoutWhereInput | WorkoutWhereInput[]
    OR?: WorkoutWhereInput[]
    NOT?: WorkoutWhereInput | WorkoutWhereInput[]
    id?: IntFilter<"Workout"> | number
    name?: StringFilter<"Workout"> | string
    description?: StringNullableFilter<"Workout"> | string | null
    createdAt?: DateTimeFilter<"Workout"> | Date | string
    updatedAt?: DateTimeFilter<"Workout"> | Date | string
    WorkoutExercise?: WorkoutExerciseListRelationFilter
  }

  export type WorkoutOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    WorkoutExercise?: WorkoutExerciseOrderByRelationAggregateInput
  }

  export type WorkoutWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WorkoutWhereInput | WorkoutWhereInput[]
    OR?: WorkoutWhereInput[]
    NOT?: WorkoutWhereInput | WorkoutWhereInput[]
    name?: StringFilter<"Workout"> | string
    description?: StringNullableFilter<"Workout"> | string | null
    createdAt?: DateTimeFilter<"Workout"> | Date | string
    updatedAt?: DateTimeFilter<"Workout"> | Date | string
    WorkoutExercise?: WorkoutExerciseListRelationFilter
  }, "id">

  export type WorkoutOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkoutCountOrderByAggregateInput
    _avg?: WorkoutAvgOrderByAggregateInput
    _max?: WorkoutMaxOrderByAggregateInput
    _min?: WorkoutMinOrderByAggregateInput
    _sum?: WorkoutSumOrderByAggregateInput
  }

  export type WorkoutScalarWhereWithAggregatesInput = {
    AND?: WorkoutScalarWhereWithAggregatesInput | WorkoutScalarWhereWithAggregatesInput[]
    OR?: WorkoutScalarWhereWithAggregatesInput[]
    NOT?: WorkoutScalarWhereWithAggregatesInput | WorkoutScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Workout"> | number
    name?: StringWithAggregatesFilter<"Workout"> | string
    description?: StringNullableWithAggregatesFilter<"Workout"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Workout"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Workout"> | Date | string
  }

  export type WorkoutExerciseWhereInput = {
    AND?: WorkoutExerciseWhereInput | WorkoutExerciseWhereInput[]
    OR?: WorkoutExerciseWhereInput[]
    NOT?: WorkoutExerciseWhereInput | WorkoutExerciseWhereInput[]
    id?: IntFilter<"WorkoutExercise"> | number
    workoutId?: IntFilter<"WorkoutExercise"> | number
    exerciseId?: IntFilter<"WorkoutExercise"> | number
    order?: IntFilter<"WorkoutExercise"> | number
    sets?: IntFilter<"WorkoutExercise"> | number
    reps?: IntFilter<"WorkoutExercise"> | number
    weight?: FloatFilter<"WorkoutExercise"> | number
    minutesToComplete?: IntFilter<"WorkoutExercise"> | number
    restBetweenSets?: IntFilter<"WorkoutExercise"> | number
    notes?: StringNullableFilter<"WorkoutExercise"> | string | null
    workout?: XOR<WorkoutRelationFilter, WorkoutWhereInput>
    exercise?: XOR<ExerciseRelationFilter, ExerciseWhereInput>
  }

  export type WorkoutExerciseOrderByWithRelationInput = {
    id?: SortOrder
    workoutId?: SortOrder
    exerciseId?: SortOrder
    order?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
    minutesToComplete?: SortOrder
    restBetweenSets?: SortOrder
    notes?: SortOrderInput | SortOrder
    workout?: WorkoutOrderByWithRelationInput
    exercise?: ExerciseOrderByWithRelationInput
  }

  export type WorkoutExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WorkoutExerciseWhereInput | WorkoutExerciseWhereInput[]
    OR?: WorkoutExerciseWhereInput[]
    NOT?: WorkoutExerciseWhereInput | WorkoutExerciseWhereInput[]
    workoutId?: IntFilter<"WorkoutExercise"> | number
    exerciseId?: IntFilter<"WorkoutExercise"> | number
    order?: IntFilter<"WorkoutExercise"> | number
    sets?: IntFilter<"WorkoutExercise"> | number
    reps?: IntFilter<"WorkoutExercise"> | number
    weight?: FloatFilter<"WorkoutExercise"> | number
    minutesToComplete?: IntFilter<"WorkoutExercise"> | number
    restBetweenSets?: IntFilter<"WorkoutExercise"> | number
    notes?: StringNullableFilter<"WorkoutExercise"> | string | null
    workout?: XOR<WorkoutRelationFilter, WorkoutWhereInput>
    exercise?: XOR<ExerciseRelationFilter, ExerciseWhereInput>
  }, "id">

  export type WorkoutExerciseOrderByWithAggregationInput = {
    id?: SortOrder
    workoutId?: SortOrder
    exerciseId?: SortOrder
    order?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
    minutesToComplete?: SortOrder
    restBetweenSets?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: WorkoutExerciseCountOrderByAggregateInput
    _avg?: WorkoutExerciseAvgOrderByAggregateInput
    _max?: WorkoutExerciseMaxOrderByAggregateInput
    _min?: WorkoutExerciseMinOrderByAggregateInput
    _sum?: WorkoutExerciseSumOrderByAggregateInput
  }

  export type WorkoutExerciseScalarWhereWithAggregatesInput = {
    AND?: WorkoutExerciseScalarWhereWithAggregatesInput | WorkoutExerciseScalarWhereWithAggregatesInput[]
    OR?: WorkoutExerciseScalarWhereWithAggregatesInput[]
    NOT?: WorkoutExerciseScalarWhereWithAggregatesInput | WorkoutExerciseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WorkoutExercise"> | number
    workoutId?: IntWithAggregatesFilter<"WorkoutExercise"> | number
    exerciseId?: IntWithAggregatesFilter<"WorkoutExercise"> | number
    order?: IntWithAggregatesFilter<"WorkoutExercise"> | number
    sets?: IntWithAggregatesFilter<"WorkoutExercise"> | number
    reps?: IntWithAggregatesFilter<"WorkoutExercise"> | number
    weight?: FloatWithAggregatesFilter<"WorkoutExercise"> | number
    minutesToComplete?: IntWithAggregatesFilter<"WorkoutExercise"> | number
    restBetweenSets?: IntWithAggregatesFilter<"WorkoutExercise"> | number
    notes?: StringNullableWithAggregatesFilter<"WorkoutExercise"> | string | null
  }

  export type ExerciseCreateInput = {
    name: string
    description?: string | null
    difficulty: string
    createdAt?: Date | string
    updatedAt?: Date | string
    primaryMuscle: MuscleTypeCreateNestedOneWithoutPrimaryExercisesInput
    secondaryMuscle?: MuscleTypeCreateNestedOneWithoutSecondaryExercisesInput
    equipment: WorkoutEquipmentCreateNestedOneWithoutExercisesInput
    WorkoutExercise?: WorkoutExerciseCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    primaryMuscleId: number
    secondaryMuscleId?: number | null
    equipmentId: number
    difficulty: string
    createdAt?: Date | string
    updatedAt?: Date | string
    WorkoutExercise?: WorkoutExerciseUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    primaryMuscle?: MuscleTypeUpdateOneRequiredWithoutPrimaryExercisesNestedInput
    secondaryMuscle?: MuscleTypeUpdateOneWithoutSecondaryExercisesNestedInput
    equipment?: WorkoutEquipmentUpdateOneRequiredWithoutExercisesNestedInput
    WorkoutExercise?: WorkoutExerciseUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    primaryMuscleId?: IntFieldUpdateOperationsInput | number
    secondaryMuscleId?: NullableIntFieldUpdateOperationsInput | number | null
    equipmentId?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    WorkoutExercise?: WorkoutExerciseUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    primaryMuscleId: number
    secondaryMuscleId?: number | null
    equipmentId: number
    difficulty: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExerciseUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    primaryMuscleId?: IntFieldUpdateOperationsInput | number
    secondaryMuscleId?: NullableIntFieldUpdateOperationsInput | number | null
    equipmentId?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MuscleTypeCreateInput = {
    name: string
    primaryExercises?: ExerciseCreateNestedManyWithoutPrimaryMuscleInput
    secondaryExercises?: ExerciseCreateNestedManyWithoutSecondaryMuscleInput
  }

  export type MuscleTypeUncheckedCreateInput = {
    id?: number
    name: string
    primaryExercises?: ExerciseUncheckedCreateNestedManyWithoutPrimaryMuscleInput
    secondaryExercises?: ExerciseUncheckedCreateNestedManyWithoutSecondaryMuscleInput
  }

  export type MuscleTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    primaryExercises?: ExerciseUpdateManyWithoutPrimaryMuscleNestedInput
    secondaryExercises?: ExerciseUpdateManyWithoutSecondaryMuscleNestedInput
  }

  export type MuscleTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    primaryExercises?: ExerciseUncheckedUpdateManyWithoutPrimaryMuscleNestedInput
    secondaryExercises?: ExerciseUncheckedUpdateManyWithoutSecondaryMuscleNestedInput
  }

  export type MuscleTypeCreateManyInput = {
    id?: number
    name: string
  }

  export type MuscleTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MuscleTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type WorkoutEquipmentCreateInput = {
    name: string
    type: $Enums.EquipmentType
    category: $Enums.EquipmentCategory
    location: $Enums.EquipmentLocation
    exercises?: ExerciseCreateNestedManyWithoutEquipmentInput
  }

  export type WorkoutEquipmentUncheckedCreateInput = {
    id?: number
    name: string
    type: $Enums.EquipmentType
    category: $Enums.EquipmentCategory
    location: $Enums.EquipmentLocation
    exercises?: ExerciseUncheckedCreateNestedManyWithoutEquipmentInput
  }

  export type WorkoutEquipmentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumEquipmentTypeFieldUpdateOperationsInput | $Enums.EquipmentType
    category?: EnumEquipmentCategoryFieldUpdateOperationsInput | $Enums.EquipmentCategory
    location?: EnumEquipmentLocationFieldUpdateOperationsInput | $Enums.EquipmentLocation
    exercises?: ExerciseUpdateManyWithoutEquipmentNestedInput
  }

  export type WorkoutEquipmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumEquipmentTypeFieldUpdateOperationsInput | $Enums.EquipmentType
    category?: EnumEquipmentCategoryFieldUpdateOperationsInput | $Enums.EquipmentCategory
    location?: EnumEquipmentLocationFieldUpdateOperationsInput | $Enums.EquipmentLocation
    exercises?: ExerciseUncheckedUpdateManyWithoutEquipmentNestedInput
  }

  export type WorkoutEquipmentCreateManyInput = {
    id?: number
    name: string
    type: $Enums.EquipmentType
    category: $Enums.EquipmentCategory
    location: $Enums.EquipmentLocation
  }

  export type WorkoutEquipmentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumEquipmentTypeFieldUpdateOperationsInput | $Enums.EquipmentType
    category?: EnumEquipmentCategoryFieldUpdateOperationsInput | $Enums.EquipmentCategory
    location?: EnumEquipmentLocationFieldUpdateOperationsInput | $Enums.EquipmentLocation
  }

  export type WorkoutEquipmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumEquipmentTypeFieldUpdateOperationsInput | $Enums.EquipmentType
    category?: EnumEquipmentCategoryFieldUpdateOperationsInput | $Enums.EquipmentCategory
    location?: EnumEquipmentLocationFieldUpdateOperationsInput | $Enums.EquipmentLocation
  }

  export type WorkoutCreateInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    WorkoutExercise?: WorkoutExerciseCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    WorkoutExercise?: WorkoutExerciseUncheckedCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    WorkoutExercise?: WorkoutExerciseUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    WorkoutExercise?: WorkoutExerciseUncheckedUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkoutUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutExerciseCreateInput = {
    order: number
    sets: number
    reps: number
    weight?: number
    minutesToComplete: number
    restBetweenSets: number
    notes?: string | null
    workout: WorkoutCreateNestedOneWithoutWorkoutExerciseInput
    exercise: ExerciseCreateNestedOneWithoutWorkoutExerciseInput
  }

  export type WorkoutExerciseUncheckedCreateInput = {
    id?: number
    workoutId: number
    exerciseId: number
    order: number
    sets: number
    reps: number
    weight?: number
    minutesToComplete: number
    restBetweenSets: number
    notes?: string | null
  }

  export type WorkoutExerciseUpdateInput = {
    order?: IntFieldUpdateOperationsInput | number
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    minutesToComplete?: IntFieldUpdateOperationsInput | number
    restBetweenSets?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    workout?: WorkoutUpdateOneRequiredWithoutWorkoutExerciseNestedInput
    exercise?: ExerciseUpdateOneRequiredWithoutWorkoutExerciseNestedInput
  }

  export type WorkoutExerciseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    workoutId?: IntFieldUpdateOperationsInput | number
    exerciseId?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    minutesToComplete?: IntFieldUpdateOperationsInput | number
    restBetweenSets?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkoutExerciseCreateManyInput = {
    id?: number
    workoutId: number
    exerciseId: number
    order: number
    sets: number
    reps: number
    weight?: number
    minutesToComplete: number
    restBetweenSets: number
    notes?: string | null
  }

  export type WorkoutExerciseUpdateManyMutationInput = {
    order?: IntFieldUpdateOperationsInput | number
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    minutesToComplete?: IntFieldUpdateOperationsInput | number
    restBetweenSets?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkoutExerciseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    workoutId?: IntFieldUpdateOperationsInput | number
    exerciseId?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    minutesToComplete?: IntFieldUpdateOperationsInput | number
    restBetweenSets?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MuscleTypeRelationFilter = {
    is?: MuscleTypeWhereInput
    isNot?: MuscleTypeWhereInput
  }

  export type MuscleTypeNullableRelationFilter = {
    is?: MuscleTypeWhereInput | null
    isNot?: MuscleTypeWhereInput | null
  }

  export type WorkoutEquipmentRelationFilter = {
    is?: WorkoutEquipmentWhereInput
    isNot?: WorkoutEquipmentWhereInput
  }

  export type WorkoutExerciseListRelationFilter = {
    every?: WorkoutExerciseWhereInput
    some?: WorkoutExerciseWhereInput
    none?: WorkoutExerciseWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WorkoutExerciseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExerciseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    primaryMuscleId?: SortOrder
    secondaryMuscleId?: SortOrder
    equipmentId?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExerciseAvgOrderByAggregateInput = {
    id?: SortOrder
    primaryMuscleId?: SortOrder
    secondaryMuscleId?: SortOrder
    equipmentId?: SortOrder
  }

  export type ExerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    primaryMuscleId?: SortOrder
    secondaryMuscleId?: SortOrder
    equipmentId?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExerciseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    primaryMuscleId?: SortOrder
    secondaryMuscleId?: SortOrder
    equipmentId?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExerciseSumOrderByAggregateInput = {
    id?: SortOrder
    primaryMuscleId?: SortOrder
    secondaryMuscleId?: SortOrder
    equipmentId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ExerciseListRelationFilter = {
    every?: ExerciseWhereInput
    some?: ExerciseWhereInput
    none?: ExerciseWhereInput
  }

  export type ExerciseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MuscleTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MuscleTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MuscleTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MuscleTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MuscleTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumEquipmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EquipmentType | EnumEquipmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EquipmentType[] | ListEnumEquipmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EquipmentType[] | ListEnumEquipmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEquipmentTypeFilter<$PrismaModel> | $Enums.EquipmentType
  }

  export type EnumEquipmentCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.EquipmentCategory | EnumEquipmentCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.EquipmentCategory[] | ListEnumEquipmentCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.EquipmentCategory[] | ListEnumEquipmentCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumEquipmentCategoryFilter<$PrismaModel> | $Enums.EquipmentCategory
  }

  export type EnumEquipmentLocationFilter<$PrismaModel = never> = {
    equals?: $Enums.EquipmentLocation | EnumEquipmentLocationFieldRefInput<$PrismaModel>
    in?: $Enums.EquipmentLocation[] | ListEnumEquipmentLocationFieldRefInput<$PrismaModel>
    notIn?: $Enums.EquipmentLocation[] | ListEnumEquipmentLocationFieldRefInput<$PrismaModel>
    not?: NestedEnumEquipmentLocationFilter<$PrismaModel> | $Enums.EquipmentLocation
  }

  export type WorkoutEquipmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    category?: SortOrder
    location?: SortOrder
  }

  export type WorkoutEquipmentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WorkoutEquipmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    category?: SortOrder
    location?: SortOrder
  }

  export type WorkoutEquipmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    category?: SortOrder
    location?: SortOrder
  }

  export type WorkoutEquipmentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumEquipmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EquipmentType | EnumEquipmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EquipmentType[] | ListEnumEquipmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EquipmentType[] | ListEnumEquipmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEquipmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.EquipmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEquipmentTypeFilter<$PrismaModel>
    _max?: NestedEnumEquipmentTypeFilter<$PrismaModel>
  }

  export type EnumEquipmentCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EquipmentCategory | EnumEquipmentCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.EquipmentCategory[] | ListEnumEquipmentCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.EquipmentCategory[] | ListEnumEquipmentCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumEquipmentCategoryWithAggregatesFilter<$PrismaModel> | $Enums.EquipmentCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEquipmentCategoryFilter<$PrismaModel>
    _max?: NestedEnumEquipmentCategoryFilter<$PrismaModel>
  }

  export type EnumEquipmentLocationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EquipmentLocation | EnumEquipmentLocationFieldRefInput<$PrismaModel>
    in?: $Enums.EquipmentLocation[] | ListEnumEquipmentLocationFieldRefInput<$PrismaModel>
    notIn?: $Enums.EquipmentLocation[] | ListEnumEquipmentLocationFieldRefInput<$PrismaModel>
    not?: NestedEnumEquipmentLocationWithAggregatesFilter<$PrismaModel> | $Enums.EquipmentLocation
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEquipmentLocationFilter<$PrismaModel>
    _max?: NestedEnumEquipmentLocationFilter<$PrismaModel>
  }

  export type WorkoutCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkoutAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WorkoutMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkoutMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkoutSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type WorkoutRelationFilter = {
    is?: WorkoutWhereInput
    isNot?: WorkoutWhereInput
  }

  export type ExerciseRelationFilter = {
    is?: ExerciseWhereInput
    isNot?: ExerciseWhereInput
  }

  export type WorkoutExerciseCountOrderByAggregateInput = {
    id?: SortOrder
    workoutId?: SortOrder
    exerciseId?: SortOrder
    order?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
    minutesToComplete?: SortOrder
    restBetweenSets?: SortOrder
    notes?: SortOrder
  }

  export type WorkoutExerciseAvgOrderByAggregateInput = {
    id?: SortOrder
    workoutId?: SortOrder
    exerciseId?: SortOrder
    order?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
    minutesToComplete?: SortOrder
    restBetweenSets?: SortOrder
  }

  export type WorkoutExerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    workoutId?: SortOrder
    exerciseId?: SortOrder
    order?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
    minutesToComplete?: SortOrder
    restBetweenSets?: SortOrder
    notes?: SortOrder
  }

  export type WorkoutExerciseMinOrderByAggregateInput = {
    id?: SortOrder
    workoutId?: SortOrder
    exerciseId?: SortOrder
    order?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
    minutesToComplete?: SortOrder
    restBetweenSets?: SortOrder
    notes?: SortOrder
  }

  export type WorkoutExerciseSumOrderByAggregateInput = {
    id?: SortOrder
    workoutId?: SortOrder
    exerciseId?: SortOrder
    order?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
    minutesToComplete?: SortOrder
    restBetweenSets?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type MuscleTypeCreateNestedOneWithoutPrimaryExercisesInput = {
    create?: XOR<MuscleTypeCreateWithoutPrimaryExercisesInput, MuscleTypeUncheckedCreateWithoutPrimaryExercisesInput>
    connectOrCreate?: MuscleTypeCreateOrConnectWithoutPrimaryExercisesInput
    connect?: MuscleTypeWhereUniqueInput
  }

  export type MuscleTypeCreateNestedOneWithoutSecondaryExercisesInput = {
    create?: XOR<MuscleTypeCreateWithoutSecondaryExercisesInput, MuscleTypeUncheckedCreateWithoutSecondaryExercisesInput>
    connectOrCreate?: MuscleTypeCreateOrConnectWithoutSecondaryExercisesInput
    connect?: MuscleTypeWhereUniqueInput
  }

  export type WorkoutEquipmentCreateNestedOneWithoutExercisesInput = {
    create?: XOR<WorkoutEquipmentCreateWithoutExercisesInput, WorkoutEquipmentUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: WorkoutEquipmentCreateOrConnectWithoutExercisesInput
    connect?: WorkoutEquipmentWhereUniqueInput
  }

  export type WorkoutExerciseCreateNestedManyWithoutExerciseInput = {
    create?: XOR<WorkoutExerciseCreateWithoutExerciseInput, WorkoutExerciseUncheckedCreateWithoutExerciseInput> | WorkoutExerciseCreateWithoutExerciseInput[] | WorkoutExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutExerciseInput | WorkoutExerciseCreateOrConnectWithoutExerciseInput[]
    createMany?: WorkoutExerciseCreateManyExerciseInputEnvelope
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
  }

  export type WorkoutExerciseUncheckedCreateNestedManyWithoutExerciseInput = {
    create?: XOR<WorkoutExerciseCreateWithoutExerciseInput, WorkoutExerciseUncheckedCreateWithoutExerciseInput> | WorkoutExerciseCreateWithoutExerciseInput[] | WorkoutExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutExerciseInput | WorkoutExerciseCreateOrConnectWithoutExerciseInput[]
    createMany?: WorkoutExerciseCreateManyExerciseInputEnvelope
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MuscleTypeUpdateOneRequiredWithoutPrimaryExercisesNestedInput = {
    create?: XOR<MuscleTypeCreateWithoutPrimaryExercisesInput, MuscleTypeUncheckedCreateWithoutPrimaryExercisesInput>
    connectOrCreate?: MuscleTypeCreateOrConnectWithoutPrimaryExercisesInput
    upsert?: MuscleTypeUpsertWithoutPrimaryExercisesInput
    connect?: MuscleTypeWhereUniqueInput
    update?: XOR<XOR<MuscleTypeUpdateToOneWithWhereWithoutPrimaryExercisesInput, MuscleTypeUpdateWithoutPrimaryExercisesInput>, MuscleTypeUncheckedUpdateWithoutPrimaryExercisesInput>
  }

  export type MuscleTypeUpdateOneWithoutSecondaryExercisesNestedInput = {
    create?: XOR<MuscleTypeCreateWithoutSecondaryExercisesInput, MuscleTypeUncheckedCreateWithoutSecondaryExercisesInput>
    connectOrCreate?: MuscleTypeCreateOrConnectWithoutSecondaryExercisesInput
    upsert?: MuscleTypeUpsertWithoutSecondaryExercisesInput
    disconnect?: MuscleTypeWhereInput | boolean
    delete?: MuscleTypeWhereInput | boolean
    connect?: MuscleTypeWhereUniqueInput
    update?: XOR<XOR<MuscleTypeUpdateToOneWithWhereWithoutSecondaryExercisesInput, MuscleTypeUpdateWithoutSecondaryExercisesInput>, MuscleTypeUncheckedUpdateWithoutSecondaryExercisesInput>
  }

  export type WorkoutEquipmentUpdateOneRequiredWithoutExercisesNestedInput = {
    create?: XOR<WorkoutEquipmentCreateWithoutExercisesInput, WorkoutEquipmentUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: WorkoutEquipmentCreateOrConnectWithoutExercisesInput
    upsert?: WorkoutEquipmentUpsertWithoutExercisesInput
    connect?: WorkoutEquipmentWhereUniqueInput
    update?: XOR<XOR<WorkoutEquipmentUpdateToOneWithWhereWithoutExercisesInput, WorkoutEquipmentUpdateWithoutExercisesInput>, WorkoutEquipmentUncheckedUpdateWithoutExercisesInput>
  }

  export type WorkoutExerciseUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<WorkoutExerciseCreateWithoutExerciseInput, WorkoutExerciseUncheckedCreateWithoutExerciseInput> | WorkoutExerciseCreateWithoutExerciseInput[] | WorkoutExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutExerciseInput | WorkoutExerciseCreateOrConnectWithoutExerciseInput[]
    upsert?: WorkoutExerciseUpsertWithWhereUniqueWithoutExerciseInput | WorkoutExerciseUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: WorkoutExerciseCreateManyExerciseInputEnvelope
    set?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    disconnect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    delete?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    update?: WorkoutExerciseUpdateWithWhereUniqueWithoutExerciseInput | WorkoutExerciseUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: WorkoutExerciseUpdateManyWithWhereWithoutExerciseInput | WorkoutExerciseUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: WorkoutExerciseScalarWhereInput | WorkoutExerciseScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WorkoutExerciseUncheckedUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<WorkoutExerciseCreateWithoutExerciseInput, WorkoutExerciseUncheckedCreateWithoutExerciseInput> | WorkoutExerciseCreateWithoutExerciseInput[] | WorkoutExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutExerciseInput | WorkoutExerciseCreateOrConnectWithoutExerciseInput[]
    upsert?: WorkoutExerciseUpsertWithWhereUniqueWithoutExerciseInput | WorkoutExerciseUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: WorkoutExerciseCreateManyExerciseInputEnvelope
    set?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    disconnect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    delete?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    update?: WorkoutExerciseUpdateWithWhereUniqueWithoutExerciseInput | WorkoutExerciseUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: WorkoutExerciseUpdateManyWithWhereWithoutExerciseInput | WorkoutExerciseUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: WorkoutExerciseScalarWhereInput | WorkoutExerciseScalarWhereInput[]
  }

  export type ExerciseCreateNestedManyWithoutPrimaryMuscleInput = {
    create?: XOR<ExerciseCreateWithoutPrimaryMuscleInput, ExerciseUncheckedCreateWithoutPrimaryMuscleInput> | ExerciseCreateWithoutPrimaryMuscleInput[] | ExerciseUncheckedCreateWithoutPrimaryMuscleInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutPrimaryMuscleInput | ExerciseCreateOrConnectWithoutPrimaryMuscleInput[]
    createMany?: ExerciseCreateManyPrimaryMuscleInputEnvelope
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
  }

  export type ExerciseCreateNestedManyWithoutSecondaryMuscleInput = {
    create?: XOR<ExerciseCreateWithoutSecondaryMuscleInput, ExerciseUncheckedCreateWithoutSecondaryMuscleInput> | ExerciseCreateWithoutSecondaryMuscleInput[] | ExerciseUncheckedCreateWithoutSecondaryMuscleInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutSecondaryMuscleInput | ExerciseCreateOrConnectWithoutSecondaryMuscleInput[]
    createMany?: ExerciseCreateManySecondaryMuscleInputEnvelope
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
  }

  export type ExerciseUncheckedCreateNestedManyWithoutPrimaryMuscleInput = {
    create?: XOR<ExerciseCreateWithoutPrimaryMuscleInput, ExerciseUncheckedCreateWithoutPrimaryMuscleInput> | ExerciseCreateWithoutPrimaryMuscleInput[] | ExerciseUncheckedCreateWithoutPrimaryMuscleInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutPrimaryMuscleInput | ExerciseCreateOrConnectWithoutPrimaryMuscleInput[]
    createMany?: ExerciseCreateManyPrimaryMuscleInputEnvelope
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
  }

  export type ExerciseUncheckedCreateNestedManyWithoutSecondaryMuscleInput = {
    create?: XOR<ExerciseCreateWithoutSecondaryMuscleInput, ExerciseUncheckedCreateWithoutSecondaryMuscleInput> | ExerciseCreateWithoutSecondaryMuscleInput[] | ExerciseUncheckedCreateWithoutSecondaryMuscleInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutSecondaryMuscleInput | ExerciseCreateOrConnectWithoutSecondaryMuscleInput[]
    createMany?: ExerciseCreateManySecondaryMuscleInputEnvelope
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
  }

  export type ExerciseUpdateManyWithoutPrimaryMuscleNestedInput = {
    create?: XOR<ExerciseCreateWithoutPrimaryMuscleInput, ExerciseUncheckedCreateWithoutPrimaryMuscleInput> | ExerciseCreateWithoutPrimaryMuscleInput[] | ExerciseUncheckedCreateWithoutPrimaryMuscleInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutPrimaryMuscleInput | ExerciseCreateOrConnectWithoutPrimaryMuscleInput[]
    upsert?: ExerciseUpsertWithWhereUniqueWithoutPrimaryMuscleInput | ExerciseUpsertWithWhereUniqueWithoutPrimaryMuscleInput[]
    createMany?: ExerciseCreateManyPrimaryMuscleInputEnvelope
    set?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    disconnect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    delete?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    update?: ExerciseUpdateWithWhereUniqueWithoutPrimaryMuscleInput | ExerciseUpdateWithWhereUniqueWithoutPrimaryMuscleInput[]
    updateMany?: ExerciseUpdateManyWithWhereWithoutPrimaryMuscleInput | ExerciseUpdateManyWithWhereWithoutPrimaryMuscleInput[]
    deleteMany?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
  }

  export type ExerciseUpdateManyWithoutSecondaryMuscleNestedInput = {
    create?: XOR<ExerciseCreateWithoutSecondaryMuscleInput, ExerciseUncheckedCreateWithoutSecondaryMuscleInput> | ExerciseCreateWithoutSecondaryMuscleInput[] | ExerciseUncheckedCreateWithoutSecondaryMuscleInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutSecondaryMuscleInput | ExerciseCreateOrConnectWithoutSecondaryMuscleInput[]
    upsert?: ExerciseUpsertWithWhereUniqueWithoutSecondaryMuscleInput | ExerciseUpsertWithWhereUniqueWithoutSecondaryMuscleInput[]
    createMany?: ExerciseCreateManySecondaryMuscleInputEnvelope
    set?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    disconnect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    delete?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    update?: ExerciseUpdateWithWhereUniqueWithoutSecondaryMuscleInput | ExerciseUpdateWithWhereUniqueWithoutSecondaryMuscleInput[]
    updateMany?: ExerciseUpdateManyWithWhereWithoutSecondaryMuscleInput | ExerciseUpdateManyWithWhereWithoutSecondaryMuscleInput[]
    deleteMany?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
  }

  export type ExerciseUncheckedUpdateManyWithoutPrimaryMuscleNestedInput = {
    create?: XOR<ExerciseCreateWithoutPrimaryMuscleInput, ExerciseUncheckedCreateWithoutPrimaryMuscleInput> | ExerciseCreateWithoutPrimaryMuscleInput[] | ExerciseUncheckedCreateWithoutPrimaryMuscleInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutPrimaryMuscleInput | ExerciseCreateOrConnectWithoutPrimaryMuscleInput[]
    upsert?: ExerciseUpsertWithWhereUniqueWithoutPrimaryMuscleInput | ExerciseUpsertWithWhereUniqueWithoutPrimaryMuscleInput[]
    createMany?: ExerciseCreateManyPrimaryMuscleInputEnvelope
    set?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    disconnect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    delete?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    update?: ExerciseUpdateWithWhereUniqueWithoutPrimaryMuscleInput | ExerciseUpdateWithWhereUniqueWithoutPrimaryMuscleInput[]
    updateMany?: ExerciseUpdateManyWithWhereWithoutPrimaryMuscleInput | ExerciseUpdateManyWithWhereWithoutPrimaryMuscleInput[]
    deleteMany?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
  }

  export type ExerciseUncheckedUpdateManyWithoutSecondaryMuscleNestedInput = {
    create?: XOR<ExerciseCreateWithoutSecondaryMuscleInput, ExerciseUncheckedCreateWithoutSecondaryMuscleInput> | ExerciseCreateWithoutSecondaryMuscleInput[] | ExerciseUncheckedCreateWithoutSecondaryMuscleInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutSecondaryMuscleInput | ExerciseCreateOrConnectWithoutSecondaryMuscleInput[]
    upsert?: ExerciseUpsertWithWhereUniqueWithoutSecondaryMuscleInput | ExerciseUpsertWithWhereUniqueWithoutSecondaryMuscleInput[]
    createMany?: ExerciseCreateManySecondaryMuscleInputEnvelope
    set?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    disconnect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    delete?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    update?: ExerciseUpdateWithWhereUniqueWithoutSecondaryMuscleInput | ExerciseUpdateWithWhereUniqueWithoutSecondaryMuscleInput[]
    updateMany?: ExerciseUpdateManyWithWhereWithoutSecondaryMuscleInput | ExerciseUpdateManyWithWhereWithoutSecondaryMuscleInput[]
    deleteMany?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
  }

  export type ExerciseCreateNestedManyWithoutEquipmentInput = {
    create?: XOR<ExerciseCreateWithoutEquipmentInput, ExerciseUncheckedCreateWithoutEquipmentInput> | ExerciseCreateWithoutEquipmentInput[] | ExerciseUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutEquipmentInput | ExerciseCreateOrConnectWithoutEquipmentInput[]
    createMany?: ExerciseCreateManyEquipmentInputEnvelope
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
  }

  export type ExerciseUncheckedCreateNestedManyWithoutEquipmentInput = {
    create?: XOR<ExerciseCreateWithoutEquipmentInput, ExerciseUncheckedCreateWithoutEquipmentInput> | ExerciseCreateWithoutEquipmentInput[] | ExerciseUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutEquipmentInput | ExerciseCreateOrConnectWithoutEquipmentInput[]
    createMany?: ExerciseCreateManyEquipmentInputEnvelope
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
  }

  export type EnumEquipmentTypeFieldUpdateOperationsInput = {
    set?: $Enums.EquipmentType
  }

  export type EnumEquipmentCategoryFieldUpdateOperationsInput = {
    set?: $Enums.EquipmentCategory
  }

  export type EnumEquipmentLocationFieldUpdateOperationsInput = {
    set?: $Enums.EquipmentLocation
  }

  export type ExerciseUpdateManyWithoutEquipmentNestedInput = {
    create?: XOR<ExerciseCreateWithoutEquipmentInput, ExerciseUncheckedCreateWithoutEquipmentInput> | ExerciseCreateWithoutEquipmentInput[] | ExerciseUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutEquipmentInput | ExerciseCreateOrConnectWithoutEquipmentInput[]
    upsert?: ExerciseUpsertWithWhereUniqueWithoutEquipmentInput | ExerciseUpsertWithWhereUniqueWithoutEquipmentInput[]
    createMany?: ExerciseCreateManyEquipmentInputEnvelope
    set?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    disconnect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    delete?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    update?: ExerciseUpdateWithWhereUniqueWithoutEquipmentInput | ExerciseUpdateWithWhereUniqueWithoutEquipmentInput[]
    updateMany?: ExerciseUpdateManyWithWhereWithoutEquipmentInput | ExerciseUpdateManyWithWhereWithoutEquipmentInput[]
    deleteMany?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
  }

  export type ExerciseUncheckedUpdateManyWithoutEquipmentNestedInput = {
    create?: XOR<ExerciseCreateWithoutEquipmentInput, ExerciseUncheckedCreateWithoutEquipmentInput> | ExerciseCreateWithoutEquipmentInput[] | ExerciseUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutEquipmentInput | ExerciseCreateOrConnectWithoutEquipmentInput[]
    upsert?: ExerciseUpsertWithWhereUniqueWithoutEquipmentInput | ExerciseUpsertWithWhereUniqueWithoutEquipmentInput[]
    createMany?: ExerciseCreateManyEquipmentInputEnvelope
    set?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    disconnect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    delete?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    update?: ExerciseUpdateWithWhereUniqueWithoutEquipmentInput | ExerciseUpdateWithWhereUniqueWithoutEquipmentInput[]
    updateMany?: ExerciseUpdateManyWithWhereWithoutEquipmentInput | ExerciseUpdateManyWithWhereWithoutEquipmentInput[]
    deleteMany?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
  }

  export type WorkoutExerciseCreateNestedManyWithoutWorkoutInput = {
    create?: XOR<WorkoutExerciseCreateWithoutWorkoutInput, WorkoutExerciseUncheckedCreateWithoutWorkoutInput> | WorkoutExerciseCreateWithoutWorkoutInput[] | WorkoutExerciseUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutWorkoutInput | WorkoutExerciseCreateOrConnectWithoutWorkoutInput[]
    createMany?: WorkoutExerciseCreateManyWorkoutInputEnvelope
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
  }

  export type WorkoutExerciseUncheckedCreateNestedManyWithoutWorkoutInput = {
    create?: XOR<WorkoutExerciseCreateWithoutWorkoutInput, WorkoutExerciseUncheckedCreateWithoutWorkoutInput> | WorkoutExerciseCreateWithoutWorkoutInput[] | WorkoutExerciseUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutWorkoutInput | WorkoutExerciseCreateOrConnectWithoutWorkoutInput[]
    createMany?: WorkoutExerciseCreateManyWorkoutInputEnvelope
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
  }

  export type WorkoutExerciseUpdateManyWithoutWorkoutNestedInput = {
    create?: XOR<WorkoutExerciseCreateWithoutWorkoutInput, WorkoutExerciseUncheckedCreateWithoutWorkoutInput> | WorkoutExerciseCreateWithoutWorkoutInput[] | WorkoutExerciseUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutWorkoutInput | WorkoutExerciseCreateOrConnectWithoutWorkoutInput[]
    upsert?: WorkoutExerciseUpsertWithWhereUniqueWithoutWorkoutInput | WorkoutExerciseUpsertWithWhereUniqueWithoutWorkoutInput[]
    createMany?: WorkoutExerciseCreateManyWorkoutInputEnvelope
    set?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    disconnect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    delete?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    update?: WorkoutExerciseUpdateWithWhereUniqueWithoutWorkoutInput | WorkoutExerciseUpdateWithWhereUniqueWithoutWorkoutInput[]
    updateMany?: WorkoutExerciseUpdateManyWithWhereWithoutWorkoutInput | WorkoutExerciseUpdateManyWithWhereWithoutWorkoutInput[]
    deleteMany?: WorkoutExerciseScalarWhereInput | WorkoutExerciseScalarWhereInput[]
  }

  export type WorkoutExerciseUncheckedUpdateManyWithoutWorkoutNestedInput = {
    create?: XOR<WorkoutExerciseCreateWithoutWorkoutInput, WorkoutExerciseUncheckedCreateWithoutWorkoutInput> | WorkoutExerciseCreateWithoutWorkoutInput[] | WorkoutExerciseUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutWorkoutInput | WorkoutExerciseCreateOrConnectWithoutWorkoutInput[]
    upsert?: WorkoutExerciseUpsertWithWhereUniqueWithoutWorkoutInput | WorkoutExerciseUpsertWithWhereUniqueWithoutWorkoutInput[]
    createMany?: WorkoutExerciseCreateManyWorkoutInputEnvelope
    set?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    disconnect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    delete?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    update?: WorkoutExerciseUpdateWithWhereUniqueWithoutWorkoutInput | WorkoutExerciseUpdateWithWhereUniqueWithoutWorkoutInput[]
    updateMany?: WorkoutExerciseUpdateManyWithWhereWithoutWorkoutInput | WorkoutExerciseUpdateManyWithWhereWithoutWorkoutInput[]
    deleteMany?: WorkoutExerciseScalarWhereInput | WorkoutExerciseScalarWhereInput[]
  }

  export type WorkoutCreateNestedOneWithoutWorkoutExerciseInput = {
    create?: XOR<WorkoutCreateWithoutWorkoutExerciseInput, WorkoutUncheckedCreateWithoutWorkoutExerciseInput>
    connectOrCreate?: WorkoutCreateOrConnectWithoutWorkoutExerciseInput
    connect?: WorkoutWhereUniqueInput
  }

  export type ExerciseCreateNestedOneWithoutWorkoutExerciseInput = {
    create?: XOR<ExerciseCreateWithoutWorkoutExerciseInput, ExerciseUncheckedCreateWithoutWorkoutExerciseInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutWorkoutExerciseInput
    connect?: ExerciseWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WorkoutUpdateOneRequiredWithoutWorkoutExerciseNestedInput = {
    create?: XOR<WorkoutCreateWithoutWorkoutExerciseInput, WorkoutUncheckedCreateWithoutWorkoutExerciseInput>
    connectOrCreate?: WorkoutCreateOrConnectWithoutWorkoutExerciseInput
    upsert?: WorkoutUpsertWithoutWorkoutExerciseInput
    connect?: WorkoutWhereUniqueInput
    update?: XOR<XOR<WorkoutUpdateToOneWithWhereWithoutWorkoutExerciseInput, WorkoutUpdateWithoutWorkoutExerciseInput>, WorkoutUncheckedUpdateWithoutWorkoutExerciseInput>
  }

  export type ExerciseUpdateOneRequiredWithoutWorkoutExerciseNestedInput = {
    create?: XOR<ExerciseCreateWithoutWorkoutExerciseInput, ExerciseUncheckedCreateWithoutWorkoutExerciseInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutWorkoutExerciseInput
    upsert?: ExerciseUpsertWithoutWorkoutExerciseInput
    connect?: ExerciseWhereUniqueInput
    update?: XOR<XOR<ExerciseUpdateToOneWithWhereWithoutWorkoutExerciseInput, ExerciseUpdateWithoutWorkoutExerciseInput>, ExerciseUncheckedUpdateWithoutWorkoutExerciseInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumEquipmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EquipmentType | EnumEquipmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EquipmentType[] | ListEnumEquipmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EquipmentType[] | ListEnumEquipmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEquipmentTypeFilter<$PrismaModel> | $Enums.EquipmentType
  }

  export type NestedEnumEquipmentCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.EquipmentCategory | EnumEquipmentCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.EquipmentCategory[] | ListEnumEquipmentCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.EquipmentCategory[] | ListEnumEquipmentCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumEquipmentCategoryFilter<$PrismaModel> | $Enums.EquipmentCategory
  }

  export type NestedEnumEquipmentLocationFilter<$PrismaModel = never> = {
    equals?: $Enums.EquipmentLocation | EnumEquipmentLocationFieldRefInput<$PrismaModel>
    in?: $Enums.EquipmentLocation[] | ListEnumEquipmentLocationFieldRefInput<$PrismaModel>
    notIn?: $Enums.EquipmentLocation[] | ListEnumEquipmentLocationFieldRefInput<$PrismaModel>
    not?: NestedEnumEquipmentLocationFilter<$PrismaModel> | $Enums.EquipmentLocation
  }

  export type NestedEnumEquipmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EquipmentType | EnumEquipmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EquipmentType[] | ListEnumEquipmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EquipmentType[] | ListEnumEquipmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEquipmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.EquipmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEquipmentTypeFilter<$PrismaModel>
    _max?: NestedEnumEquipmentTypeFilter<$PrismaModel>
  }

  export type NestedEnumEquipmentCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EquipmentCategory | EnumEquipmentCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.EquipmentCategory[] | ListEnumEquipmentCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.EquipmentCategory[] | ListEnumEquipmentCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumEquipmentCategoryWithAggregatesFilter<$PrismaModel> | $Enums.EquipmentCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEquipmentCategoryFilter<$PrismaModel>
    _max?: NestedEnumEquipmentCategoryFilter<$PrismaModel>
  }

  export type NestedEnumEquipmentLocationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EquipmentLocation | EnumEquipmentLocationFieldRefInput<$PrismaModel>
    in?: $Enums.EquipmentLocation[] | ListEnumEquipmentLocationFieldRefInput<$PrismaModel>
    notIn?: $Enums.EquipmentLocation[] | ListEnumEquipmentLocationFieldRefInput<$PrismaModel>
    not?: NestedEnumEquipmentLocationWithAggregatesFilter<$PrismaModel> | $Enums.EquipmentLocation
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEquipmentLocationFilter<$PrismaModel>
    _max?: NestedEnumEquipmentLocationFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type MuscleTypeCreateWithoutPrimaryExercisesInput = {
    name: string
    secondaryExercises?: ExerciseCreateNestedManyWithoutSecondaryMuscleInput
  }

  export type MuscleTypeUncheckedCreateWithoutPrimaryExercisesInput = {
    id?: number
    name: string
    secondaryExercises?: ExerciseUncheckedCreateNestedManyWithoutSecondaryMuscleInput
  }

  export type MuscleTypeCreateOrConnectWithoutPrimaryExercisesInput = {
    where: MuscleTypeWhereUniqueInput
    create: XOR<MuscleTypeCreateWithoutPrimaryExercisesInput, MuscleTypeUncheckedCreateWithoutPrimaryExercisesInput>
  }

  export type MuscleTypeCreateWithoutSecondaryExercisesInput = {
    name: string
    primaryExercises?: ExerciseCreateNestedManyWithoutPrimaryMuscleInput
  }

  export type MuscleTypeUncheckedCreateWithoutSecondaryExercisesInput = {
    id?: number
    name: string
    primaryExercises?: ExerciseUncheckedCreateNestedManyWithoutPrimaryMuscleInput
  }

  export type MuscleTypeCreateOrConnectWithoutSecondaryExercisesInput = {
    where: MuscleTypeWhereUniqueInput
    create: XOR<MuscleTypeCreateWithoutSecondaryExercisesInput, MuscleTypeUncheckedCreateWithoutSecondaryExercisesInput>
  }

  export type WorkoutEquipmentCreateWithoutExercisesInput = {
    name: string
    type: $Enums.EquipmentType
    category: $Enums.EquipmentCategory
    location: $Enums.EquipmentLocation
  }

  export type WorkoutEquipmentUncheckedCreateWithoutExercisesInput = {
    id?: number
    name: string
    type: $Enums.EquipmentType
    category: $Enums.EquipmentCategory
    location: $Enums.EquipmentLocation
  }

  export type WorkoutEquipmentCreateOrConnectWithoutExercisesInput = {
    where: WorkoutEquipmentWhereUniqueInput
    create: XOR<WorkoutEquipmentCreateWithoutExercisesInput, WorkoutEquipmentUncheckedCreateWithoutExercisesInput>
  }

  export type WorkoutExerciseCreateWithoutExerciseInput = {
    order: number
    sets: number
    reps: number
    weight?: number
    minutesToComplete: number
    restBetweenSets: number
    notes?: string | null
    workout: WorkoutCreateNestedOneWithoutWorkoutExerciseInput
  }

  export type WorkoutExerciseUncheckedCreateWithoutExerciseInput = {
    id?: number
    workoutId: number
    order: number
    sets: number
    reps: number
    weight?: number
    minutesToComplete: number
    restBetweenSets: number
    notes?: string | null
  }

  export type WorkoutExerciseCreateOrConnectWithoutExerciseInput = {
    where: WorkoutExerciseWhereUniqueInput
    create: XOR<WorkoutExerciseCreateWithoutExerciseInput, WorkoutExerciseUncheckedCreateWithoutExerciseInput>
  }

  export type WorkoutExerciseCreateManyExerciseInputEnvelope = {
    data: WorkoutExerciseCreateManyExerciseInput | WorkoutExerciseCreateManyExerciseInput[]
    skipDuplicates?: boolean
  }

  export type MuscleTypeUpsertWithoutPrimaryExercisesInput = {
    update: XOR<MuscleTypeUpdateWithoutPrimaryExercisesInput, MuscleTypeUncheckedUpdateWithoutPrimaryExercisesInput>
    create: XOR<MuscleTypeCreateWithoutPrimaryExercisesInput, MuscleTypeUncheckedCreateWithoutPrimaryExercisesInput>
    where?: MuscleTypeWhereInput
  }

  export type MuscleTypeUpdateToOneWithWhereWithoutPrimaryExercisesInput = {
    where?: MuscleTypeWhereInput
    data: XOR<MuscleTypeUpdateWithoutPrimaryExercisesInput, MuscleTypeUncheckedUpdateWithoutPrimaryExercisesInput>
  }

  export type MuscleTypeUpdateWithoutPrimaryExercisesInput = {
    name?: StringFieldUpdateOperationsInput | string
    secondaryExercises?: ExerciseUpdateManyWithoutSecondaryMuscleNestedInput
  }

  export type MuscleTypeUncheckedUpdateWithoutPrimaryExercisesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    secondaryExercises?: ExerciseUncheckedUpdateManyWithoutSecondaryMuscleNestedInput
  }

  export type MuscleTypeUpsertWithoutSecondaryExercisesInput = {
    update: XOR<MuscleTypeUpdateWithoutSecondaryExercisesInput, MuscleTypeUncheckedUpdateWithoutSecondaryExercisesInput>
    create: XOR<MuscleTypeCreateWithoutSecondaryExercisesInput, MuscleTypeUncheckedCreateWithoutSecondaryExercisesInput>
    where?: MuscleTypeWhereInput
  }

  export type MuscleTypeUpdateToOneWithWhereWithoutSecondaryExercisesInput = {
    where?: MuscleTypeWhereInput
    data: XOR<MuscleTypeUpdateWithoutSecondaryExercisesInput, MuscleTypeUncheckedUpdateWithoutSecondaryExercisesInput>
  }

  export type MuscleTypeUpdateWithoutSecondaryExercisesInput = {
    name?: StringFieldUpdateOperationsInput | string
    primaryExercises?: ExerciseUpdateManyWithoutPrimaryMuscleNestedInput
  }

  export type MuscleTypeUncheckedUpdateWithoutSecondaryExercisesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    primaryExercises?: ExerciseUncheckedUpdateManyWithoutPrimaryMuscleNestedInput
  }

  export type WorkoutEquipmentUpsertWithoutExercisesInput = {
    update: XOR<WorkoutEquipmentUpdateWithoutExercisesInput, WorkoutEquipmentUncheckedUpdateWithoutExercisesInput>
    create: XOR<WorkoutEquipmentCreateWithoutExercisesInput, WorkoutEquipmentUncheckedCreateWithoutExercisesInput>
    where?: WorkoutEquipmentWhereInput
  }

  export type WorkoutEquipmentUpdateToOneWithWhereWithoutExercisesInput = {
    where?: WorkoutEquipmentWhereInput
    data: XOR<WorkoutEquipmentUpdateWithoutExercisesInput, WorkoutEquipmentUncheckedUpdateWithoutExercisesInput>
  }

  export type WorkoutEquipmentUpdateWithoutExercisesInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumEquipmentTypeFieldUpdateOperationsInput | $Enums.EquipmentType
    category?: EnumEquipmentCategoryFieldUpdateOperationsInput | $Enums.EquipmentCategory
    location?: EnumEquipmentLocationFieldUpdateOperationsInput | $Enums.EquipmentLocation
  }

  export type WorkoutEquipmentUncheckedUpdateWithoutExercisesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumEquipmentTypeFieldUpdateOperationsInput | $Enums.EquipmentType
    category?: EnumEquipmentCategoryFieldUpdateOperationsInput | $Enums.EquipmentCategory
    location?: EnumEquipmentLocationFieldUpdateOperationsInput | $Enums.EquipmentLocation
  }

  export type WorkoutExerciseUpsertWithWhereUniqueWithoutExerciseInput = {
    where: WorkoutExerciseWhereUniqueInput
    update: XOR<WorkoutExerciseUpdateWithoutExerciseInput, WorkoutExerciseUncheckedUpdateWithoutExerciseInput>
    create: XOR<WorkoutExerciseCreateWithoutExerciseInput, WorkoutExerciseUncheckedCreateWithoutExerciseInput>
  }

  export type WorkoutExerciseUpdateWithWhereUniqueWithoutExerciseInput = {
    where: WorkoutExerciseWhereUniqueInput
    data: XOR<WorkoutExerciseUpdateWithoutExerciseInput, WorkoutExerciseUncheckedUpdateWithoutExerciseInput>
  }

  export type WorkoutExerciseUpdateManyWithWhereWithoutExerciseInput = {
    where: WorkoutExerciseScalarWhereInput
    data: XOR<WorkoutExerciseUpdateManyMutationInput, WorkoutExerciseUncheckedUpdateManyWithoutExerciseInput>
  }

  export type WorkoutExerciseScalarWhereInput = {
    AND?: WorkoutExerciseScalarWhereInput | WorkoutExerciseScalarWhereInput[]
    OR?: WorkoutExerciseScalarWhereInput[]
    NOT?: WorkoutExerciseScalarWhereInput | WorkoutExerciseScalarWhereInput[]
    id?: IntFilter<"WorkoutExercise"> | number
    workoutId?: IntFilter<"WorkoutExercise"> | number
    exerciseId?: IntFilter<"WorkoutExercise"> | number
    order?: IntFilter<"WorkoutExercise"> | number
    sets?: IntFilter<"WorkoutExercise"> | number
    reps?: IntFilter<"WorkoutExercise"> | number
    weight?: FloatFilter<"WorkoutExercise"> | number
    minutesToComplete?: IntFilter<"WorkoutExercise"> | number
    restBetweenSets?: IntFilter<"WorkoutExercise"> | number
    notes?: StringNullableFilter<"WorkoutExercise"> | string | null
  }

  export type ExerciseCreateWithoutPrimaryMuscleInput = {
    name: string
    description?: string | null
    difficulty: string
    createdAt?: Date | string
    updatedAt?: Date | string
    secondaryMuscle?: MuscleTypeCreateNestedOneWithoutSecondaryExercisesInput
    equipment: WorkoutEquipmentCreateNestedOneWithoutExercisesInput
    WorkoutExercise?: WorkoutExerciseCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateWithoutPrimaryMuscleInput = {
    id?: number
    name: string
    description?: string | null
    secondaryMuscleId?: number | null
    equipmentId: number
    difficulty: string
    createdAt?: Date | string
    updatedAt?: Date | string
    WorkoutExercise?: WorkoutExerciseUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseCreateOrConnectWithoutPrimaryMuscleInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutPrimaryMuscleInput, ExerciseUncheckedCreateWithoutPrimaryMuscleInput>
  }

  export type ExerciseCreateManyPrimaryMuscleInputEnvelope = {
    data: ExerciseCreateManyPrimaryMuscleInput | ExerciseCreateManyPrimaryMuscleInput[]
    skipDuplicates?: boolean
  }

  export type ExerciseCreateWithoutSecondaryMuscleInput = {
    name: string
    description?: string | null
    difficulty: string
    createdAt?: Date | string
    updatedAt?: Date | string
    primaryMuscle: MuscleTypeCreateNestedOneWithoutPrimaryExercisesInput
    equipment: WorkoutEquipmentCreateNestedOneWithoutExercisesInput
    WorkoutExercise?: WorkoutExerciseCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateWithoutSecondaryMuscleInput = {
    id?: number
    name: string
    description?: string | null
    primaryMuscleId: number
    equipmentId: number
    difficulty: string
    createdAt?: Date | string
    updatedAt?: Date | string
    WorkoutExercise?: WorkoutExerciseUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseCreateOrConnectWithoutSecondaryMuscleInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutSecondaryMuscleInput, ExerciseUncheckedCreateWithoutSecondaryMuscleInput>
  }

  export type ExerciseCreateManySecondaryMuscleInputEnvelope = {
    data: ExerciseCreateManySecondaryMuscleInput | ExerciseCreateManySecondaryMuscleInput[]
    skipDuplicates?: boolean
  }

  export type ExerciseUpsertWithWhereUniqueWithoutPrimaryMuscleInput = {
    where: ExerciseWhereUniqueInput
    update: XOR<ExerciseUpdateWithoutPrimaryMuscleInput, ExerciseUncheckedUpdateWithoutPrimaryMuscleInput>
    create: XOR<ExerciseCreateWithoutPrimaryMuscleInput, ExerciseUncheckedCreateWithoutPrimaryMuscleInput>
  }

  export type ExerciseUpdateWithWhereUniqueWithoutPrimaryMuscleInput = {
    where: ExerciseWhereUniqueInput
    data: XOR<ExerciseUpdateWithoutPrimaryMuscleInput, ExerciseUncheckedUpdateWithoutPrimaryMuscleInput>
  }

  export type ExerciseUpdateManyWithWhereWithoutPrimaryMuscleInput = {
    where: ExerciseScalarWhereInput
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyWithoutPrimaryMuscleInput>
  }

  export type ExerciseScalarWhereInput = {
    AND?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
    OR?: ExerciseScalarWhereInput[]
    NOT?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
    id?: IntFilter<"Exercise"> | number
    name?: StringFilter<"Exercise"> | string
    description?: StringNullableFilter<"Exercise"> | string | null
    primaryMuscleId?: IntFilter<"Exercise"> | number
    secondaryMuscleId?: IntNullableFilter<"Exercise"> | number | null
    equipmentId?: IntFilter<"Exercise"> | number
    difficulty?: StringFilter<"Exercise"> | string
    createdAt?: DateTimeFilter<"Exercise"> | Date | string
    updatedAt?: DateTimeFilter<"Exercise"> | Date | string
  }

  export type ExerciseUpsertWithWhereUniqueWithoutSecondaryMuscleInput = {
    where: ExerciseWhereUniqueInput
    update: XOR<ExerciseUpdateWithoutSecondaryMuscleInput, ExerciseUncheckedUpdateWithoutSecondaryMuscleInput>
    create: XOR<ExerciseCreateWithoutSecondaryMuscleInput, ExerciseUncheckedCreateWithoutSecondaryMuscleInput>
  }

  export type ExerciseUpdateWithWhereUniqueWithoutSecondaryMuscleInput = {
    where: ExerciseWhereUniqueInput
    data: XOR<ExerciseUpdateWithoutSecondaryMuscleInput, ExerciseUncheckedUpdateWithoutSecondaryMuscleInput>
  }

  export type ExerciseUpdateManyWithWhereWithoutSecondaryMuscleInput = {
    where: ExerciseScalarWhereInput
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyWithoutSecondaryMuscleInput>
  }

  export type ExerciseCreateWithoutEquipmentInput = {
    name: string
    description?: string | null
    difficulty: string
    createdAt?: Date | string
    updatedAt?: Date | string
    primaryMuscle: MuscleTypeCreateNestedOneWithoutPrimaryExercisesInput
    secondaryMuscle?: MuscleTypeCreateNestedOneWithoutSecondaryExercisesInput
    WorkoutExercise?: WorkoutExerciseCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateWithoutEquipmentInput = {
    id?: number
    name: string
    description?: string | null
    primaryMuscleId: number
    secondaryMuscleId?: number | null
    difficulty: string
    createdAt?: Date | string
    updatedAt?: Date | string
    WorkoutExercise?: WorkoutExerciseUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseCreateOrConnectWithoutEquipmentInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutEquipmentInput, ExerciseUncheckedCreateWithoutEquipmentInput>
  }

  export type ExerciseCreateManyEquipmentInputEnvelope = {
    data: ExerciseCreateManyEquipmentInput | ExerciseCreateManyEquipmentInput[]
    skipDuplicates?: boolean
  }

  export type ExerciseUpsertWithWhereUniqueWithoutEquipmentInput = {
    where: ExerciseWhereUniqueInput
    update: XOR<ExerciseUpdateWithoutEquipmentInput, ExerciseUncheckedUpdateWithoutEquipmentInput>
    create: XOR<ExerciseCreateWithoutEquipmentInput, ExerciseUncheckedCreateWithoutEquipmentInput>
  }

  export type ExerciseUpdateWithWhereUniqueWithoutEquipmentInput = {
    where: ExerciseWhereUniqueInput
    data: XOR<ExerciseUpdateWithoutEquipmentInput, ExerciseUncheckedUpdateWithoutEquipmentInput>
  }

  export type ExerciseUpdateManyWithWhereWithoutEquipmentInput = {
    where: ExerciseScalarWhereInput
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyWithoutEquipmentInput>
  }

  export type WorkoutExerciseCreateWithoutWorkoutInput = {
    order: number
    sets: number
    reps: number
    weight?: number
    minutesToComplete: number
    restBetweenSets: number
    notes?: string | null
    exercise: ExerciseCreateNestedOneWithoutWorkoutExerciseInput
  }

  export type WorkoutExerciseUncheckedCreateWithoutWorkoutInput = {
    id?: number
    exerciseId: number
    order: number
    sets: number
    reps: number
    weight?: number
    minutesToComplete: number
    restBetweenSets: number
    notes?: string | null
  }

  export type WorkoutExerciseCreateOrConnectWithoutWorkoutInput = {
    where: WorkoutExerciseWhereUniqueInput
    create: XOR<WorkoutExerciseCreateWithoutWorkoutInput, WorkoutExerciseUncheckedCreateWithoutWorkoutInput>
  }

  export type WorkoutExerciseCreateManyWorkoutInputEnvelope = {
    data: WorkoutExerciseCreateManyWorkoutInput | WorkoutExerciseCreateManyWorkoutInput[]
    skipDuplicates?: boolean
  }

  export type WorkoutExerciseUpsertWithWhereUniqueWithoutWorkoutInput = {
    where: WorkoutExerciseWhereUniqueInput
    update: XOR<WorkoutExerciseUpdateWithoutWorkoutInput, WorkoutExerciseUncheckedUpdateWithoutWorkoutInput>
    create: XOR<WorkoutExerciseCreateWithoutWorkoutInput, WorkoutExerciseUncheckedCreateWithoutWorkoutInput>
  }

  export type WorkoutExerciseUpdateWithWhereUniqueWithoutWorkoutInput = {
    where: WorkoutExerciseWhereUniqueInput
    data: XOR<WorkoutExerciseUpdateWithoutWorkoutInput, WorkoutExerciseUncheckedUpdateWithoutWorkoutInput>
  }

  export type WorkoutExerciseUpdateManyWithWhereWithoutWorkoutInput = {
    where: WorkoutExerciseScalarWhereInput
    data: XOR<WorkoutExerciseUpdateManyMutationInput, WorkoutExerciseUncheckedUpdateManyWithoutWorkoutInput>
  }

  export type WorkoutCreateWithoutWorkoutExerciseInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkoutUncheckedCreateWithoutWorkoutExerciseInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkoutCreateOrConnectWithoutWorkoutExerciseInput = {
    where: WorkoutWhereUniqueInput
    create: XOR<WorkoutCreateWithoutWorkoutExerciseInput, WorkoutUncheckedCreateWithoutWorkoutExerciseInput>
  }

  export type ExerciseCreateWithoutWorkoutExerciseInput = {
    name: string
    description?: string | null
    difficulty: string
    createdAt?: Date | string
    updatedAt?: Date | string
    primaryMuscle: MuscleTypeCreateNestedOneWithoutPrimaryExercisesInput
    secondaryMuscle?: MuscleTypeCreateNestedOneWithoutSecondaryExercisesInput
    equipment: WorkoutEquipmentCreateNestedOneWithoutExercisesInput
  }

  export type ExerciseUncheckedCreateWithoutWorkoutExerciseInput = {
    id?: number
    name: string
    description?: string | null
    primaryMuscleId: number
    secondaryMuscleId?: number | null
    equipmentId: number
    difficulty: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExerciseCreateOrConnectWithoutWorkoutExerciseInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutWorkoutExerciseInput, ExerciseUncheckedCreateWithoutWorkoutExerciseInput>
  }

  export type WorkoutUpsertWithoutWorkoutExerciseInput = {
    update: XOR<WorkoutUpdateWithoutWorkoutExerciseInput, WorkoutUncheckedUpdateWithoutWorkoutExerciseInput>
    create: XOR<WorkoutCreateWithoutWorkoutExerciseInput, WorkoutUncheckedCreateWithoutWorkoutExerciseInput>
    where?: WorkoutWhereInput
  }

  export type WorkoutUpdateToOneWithWhereWithoutWorkoutExerciseInput = {
    where?: WorkoutWhereInput
    data: XOR<WorkoutUpdateWithoutWorkoutExerciseInput, WorkoutUncheckedUpdateWithoutWorkoutExerciseInput>
  }

  export type WorkoutUpdateWithoutWorkoutExerciseInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutUncheckedUpdateWithoutWorkoutExerciseInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseUpsertWithoutWorkoutExerciseInput = {
    update: XOR<ExerciseUpdateWithoutWorkoutExerciseInput, ExerciseUncheckedUpdateWithoutWorkoutExerciseInput>
    create: XOR<ExerciseCreateWithoutWorkoutExerciseInput, ExerciseUncheckedCreateWithoutWorkoutExerciseInput>
    where?: ExerciseWhereInput
  }

  export type ExerciseUpdateToOneWithWhereWithoutWorkoutExerciseInput = {
    where?: ExerciseWhereInput
    data: XOR<ExerciseUpdateWithoutWorkoutExerciseInput, ExerciseUncheckedUpdateWithoutWorkoutExerciseInput>
  }

  export type ExerciseUpdateWithoutWorkoutExerciseInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    primaryMuscle?: MuscleTypeUpdateOneRequiredWithoutPrimaryExercisesNestedInput
    secondaryMuscle?: MuscleTypeUpdateOneWithoutSecondaryExercisesNestedInput
    equipment?: WorkoutEquipmentUpdateOneRequiredWithoutExercisesNestedInput
  }

  export type ExerciseUncheckedUpdateWithoutWorkoutExerciseInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    primaryMuscleId?: IntFieldUpdateOperationsInput | number
    secondaryMuscleId?: NullableIntFieldUpdateOperationsInput | number | null
    equipmentId?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutExerciseCreateManyExerciseInput = {
    id?: number
    workoutId: number
    order: number
    sets: number
    reps: number
    weight?: number
    minutesToComplete: number
    restBetweenSets: number
    notes?: string | null
  }

  export type WorkoutExerciseUpdateWithoutExerciseInput = {
    order?: IntFieldUpdateOperationsInput | number
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    minutesToComplete?: IntFieldUpdateOperationsInput | number
    restBetweenSets?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    workout?: WorkoutUpdateOneRequiredWithoutWorkoutExerciseNestedInput
  }

  export type WorkoutExerciseUncheckedUpdateWithoutExerciseInput = {
    id?: IntFieldUpdateOperationsInput | number
    workoutId?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    minutesToComplete?: IntFieldUpdateOperationsInput | number
    restBetweenSets?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkoutExerciseUncheckedUpdateManyWithoutExerciseInput = {
    id?: IntFieldUpdateOperationsInput | number
    workoutId?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    minutesToComplete?: IntFieldUpdateOperationsInput | number
    restBetweenSets?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExerciseCreateManyPrimaryMuscleInput = {
    id?: number
    name: string
    description?: string | null
    secondaryMuscleId?: number | null
    equipmentId: number
    difficulty: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExerciseCreateManySecondaryMuscleInput = {
    id?: number
    name: string
    description?: string | null
    primaryMuscleId: number
    equipmentId: number
    difficulty: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExerciseUpdateWithoutPrimaryMuscleInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    secondaryMuscle?: MuscleTypeUpdateOneWithoutSecondaryExercisesNestedInput
    equipment?: WorkoutEquipmentUpdateOneRequiredWithoutExercisesNestedInput
    WorkoutExercise?: WorkoutExerciseUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateWithoutPrimaryMuscleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryMuscleId?: NullableIntFieldUpdateOperationsInput | number | null
    equipmentId?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    WorkoutExercise?: WorkoutExerciseUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateManyWithoutPrimaryMuscleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryMuscleId?: NullableIntFieldUpdateOperationsInput | number | null
    equipmentId?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseUpdateWithoutSecondaryMuscleInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    primaryMuscle?: MuscleTypeUpdateOneRequiredWithoutPrimaryExercisesNestedInput
    equipment?: WorkoutEquipmentUpdateOneRequiredWithoutExercisesNestedInput
    WorkoutExercise?: WorkoutExerciseUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateWithoutSecondaryMuscleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    primaryMuscleId?: IntFieldUpdateOperationsInput | number
    equipmentId?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    WorkoutExercise?: WorkoutExerciseUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateManyWithoutSecondaryMuscleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    primaryMuscleId?: IntFieldUpdateOperationsInput | number
    equipmentId?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseCreateManyEquipmentInput = {
    id?: number
    name: string
    description?: string | null
    primaryMuscleId: number
    secondaryMuscleId?: number | null
    difficulty: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExerciseUpdateWithoutEquipmentInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    primaryMuscle?: MuscleTypeUpdateOneRequiredWithoutPrimaryExercisesNestedInput
    secondaryMuscle?: MuscleTypeUpdateOneWithoutSecondaryExercisesNestedInput
    WorkoutExercise?: WorkoutExerciseUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateWithoutEquipmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    primaryMuscleId?: IntFieldUpdateOperationsInput | number
    secondaryMuscleId?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    WorkoutExercise?: WorkoutExerciseUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateManyWithoutEquipmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    primaryMuscleId?: IntFieldUpdateOperationsInput | number
    secondaryMuscleId?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutExerciseCreateManyWorkoutInput = {
    id?: number
    exerciseId: number
    order: number
    sets: number
    reps: number
    weight?: number
    minutesToComplete: number
    restBetweenSets: number
    notes?: string | null
  }

  export type WorkoutExerciseUpdateWithoutWorkoutInput = {
    order?: IntFieldUpdateOperationsInput | number
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    minutesToComplete?: IntFieldUpdateOperationsInput | number
    restBetweenSets?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    exercise?: ExerciseUpdateOneRequiredWithoutWorkoutExerciseNestedInput
  }

  export type WorkoutExerciseUncheckedUpdateWithoutWorkoutInput = {
    id?: IntFieldUpdateOperationsInput | number
    exerciseId?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    minutesToComplete?: IntFieldUpdateOperationsInput | number
    restBetweenSets?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkoutExerciseUncheckedUpdateManyWithoutWorkoutInput = {
    id?: IntFieldUpdateOperationsInput | number
    exerciseId?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    minutesToComplete?: IntFieldUpdateOperationsInput | number
    restBetweenSets?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ExerciseCountOutputTypeDefaultArgs instead
     */
    export type ExerciseCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExerciseCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MuscleTypeCountOutputTypeDefaultArgs instead
     */
    export type MuscleTypeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MuscleTypeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorkoutEquipmentCountOutputTypeDefaultArgs instead
     */
    export type WorkoutEquipmentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorkoutEquipmentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorkoutCountOutputTypeDefaultArgs instead
     */
    export type WorkoutCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorkoutCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExerciseDefaultArgs instead
     */
    export type ExerciseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExerciseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MuscleTypeDefaultArgs instead
     */
    export type MuscleTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MuscleTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorkoutEquipmentDefaultArgs instead
     */
    export type WorkoutEquipmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorkoutEquipmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorkoutDefaultArgs instead
     */
    export type WorkoutArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorkoutDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorkoutExerciseDefaultArgs instead
     */
    export type WorkoutExerciseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorkoutExerciseDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}