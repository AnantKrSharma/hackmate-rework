
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Startupinfo
 * 
 */
export type Startupinfo = $Result.DefaultSelection<Prisma.$StartupinfoPayload>
/**
 * Model ContactInfo
 * 
 */
export type ContactInfo = $Result.DefaultSelection<Prisma.$ContactInfoPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model UserLocation
 * 
 */
export type UserLocation = $Result.DefaultSelection<Prisma.$UserLocationPayload>
/**
 * Model Report
 * 
 */
export type Report = $Result.DefaultSelection<Prisma.$ReportPayload>
/**
 * Model Match
 * 
 */
export type Match = $Result.DefaultSelection<Prisma.$MatchPayload>
/**
 * Model View
 * 
 */
export type View = $Result.DefaultSelection<Prisma.$ViewPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const WorkingStyle: {
  ASYNC: 'ASYNC',
  REAL_TIME: 'REAL_TIME',
  FLEXIBLE: 'FLEXIBLE',
  STRUCTURED: 'STRUCTURED'
};

export type WorkingStyle = (typeof WorkingStyle)[keyof typeof WorkingStyle]


export const CollaborationPref: {
  REMOTE: 'REMOTE',
  HYBRID: 'HYBRID',
  IN_PERSON: 'IN_PERSON',
  DOESNT_MATTER: 'DOESNT_MATTER'
};

export type CollaborationPref = (typeof CollaborationPref)[keyof typeof CollaborationPref]


export const StartupStage: {
  IDEA: 'IDEA',
  MVP: 'MVP',
  SCALING: 'SCALING',
  EXITED: 'EXITED'
};

export type StartupStage = (typeof StartupStage)[keyof typeof StartupStage]


export const CommitmentLevel: {
  EXPLORING: 'EXPLORING',
  BUILDING: 'BUILDING',
  LAUNCHING: 'LAUNCHING',
  FULL_TIME_READY: 'FULL_TIME_READY'
};

export type CommitmentLevel = (typeof CommitmentLevel)[keyof typeof CommitmentLevel]

}

export type WorkingStyle = $Enums.WorkingStyle

export const WorkingStyle: typeof $Enums.WorkingStyle

export type CollaborationPref = $Enums.CollaborationPref

export const CollaborationPref: typeof $Enums.CollaborationPref

export type StartupStage = $Enums.StartupStage

export const StartupStage: typeof $Enums.StartupStage

export type CommitmentLevel = $Enums.CommitmentLevel

export const CommitmentLevel: typeof $Enums.CommitmentLevel

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.startupinfo`: Exposes CRUD operations for the **Startupinfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Startupinfos
    * const startupinfos = await prisma.startupinfo.findMany()
    * ```
    */
  get startupinfo(): Prisma.StartupinfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactInfo`: Exposes CRUD operations for the **ContactInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactInfos
    * const contactInfos = await prisma.contactInfo.findMany()
    * ```
    */
  get contactInfo(): Prisma.ContactInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userLocation`: Exposes CRUD operations for the **UserLocation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserLocations
    * const userLocations = await prisma.userLocation.findMany()
    * ```
    */
  get userLocation(): Prisma.UserLocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **Report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.ReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.match`: Exposes CRUD operations for the **Match** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matches
    * const matches = await prisma.match.findMany()
    * ```
    */
  get match(): Prisma.MatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.view`: Exposes CRUD operations for the **View** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Views
    * const views = await prisma.view.findMany()
    * ```
    */
  get view(): Prisma.ViewDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Admin: 'Admin',
    Startupinfo: 'Startupinfo',
    ContactInfo: 'ContactInfo',
    Project: 'Project',
    UserLocation: 'UserLocation',
    Report: 'Report',
    Match: 'Match',
    View: 'View'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "admin" | "startupinfo" | "contactInfo" | "project" | "userLocation" | "report" | "match" | "view"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Startupinfo: {
        payload: Prisma.$StartupinfoPayload<ExtArgs>
        fields: Prisma.StartupinfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StartupinfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StartupinfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StartupinfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StartupinfoPayload>
          }
          findFirst: {
            args: Prisma.StartupinfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StartupinfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StartupinfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StartupinfoPayload>
          }
          findMany: {
            args: Prisma.StartupinfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StartupinfoPayload>[]
          }
          create: {
            args: Prisma.StartupinfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StartupinfoPayload>
          }
          createMany: {
            args: Prisma.StartupinfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StartupinfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StartupinfoPayload>[]
          }
          delete: {
            args: Prisma.StartupinfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StartupinfoPayload>
          }
          update: {
            args: Prisma.StartupinfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StartupinfoPayload>
          }
          deleteMany: {
            args: Prisma.StartupinfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StartupinfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StartupinfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StartupinfoPayload>[]
          }
          upsert: {
            args: Prisma.StartupinfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StartupinfoPayload>
          }
          aggregate: {
            args: Prisma.StartupinfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStartupinfo>
          }
          groupBy: {
            args: Prisma.StartupinfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<StartupinfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.StartupinfoCountArgs<ExtArgs>
            result: $Utils.Optional<StartupinfoCountAggregateOutputType> | number
          }
        }
      }
      ContactInfo: {
        payload: Prisma.$ContactInfoPayload<ExtArgs>
        fields: Prisma.ContactInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          findFirst: {
            args: Prisma.ContactInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          findMany: {
            args: Prisma.ContactInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>[]
          }
          create: {
            args: Prisma.ContactInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          createMany: {
            args: Prisma.ContactInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>[]
          }
          delete: {
            args: Prisma.ContactInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          update: {
            args: Prisma.ContactInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          deleteMany: {
            args: Prisma.ContactInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>[]
          }
          upsert: {
            args: Prisma.ContactInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          aggregate: {
            args: Prisma.ContactInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactInfo>
          }
          groupBy: {
            args: Prisma.ContactInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactInfoCountArgs<ExtArgs>
            result: $Utils.Optional<ContactInfoCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      UserLocation: {
        payload: Prisma.$UserLocationPayload<ExtArgs>
        fields: Prisma.UserLocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserLocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserLocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>
          }
          findFirst: {
            args: Prisma.UserLocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserLocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>
          }
          findMany: {
            args: Prisma.UserLocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>[]
          }
          create: {
            args: Prisma.UserLocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>
          }
          createMany: {
            args: Prisma.UserLocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserLocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>[]
          }
          delete: {
            args: Prisma.UserLocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>
          }
          update: {
            args: Prisma.UserLocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>
          }
          deleteMany: {
            args: Prisma.UserLocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserLocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserLocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>[]
          }
          upsert: {
            args: Prisma.UserLocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>
          }
          aggregate: {
            args: Prisma.UserLocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserLocation>
          }
          groupBy: {
            args: Prisma.UserLocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserLocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserLocationCountArgs<ExtArgs>
            result: $Utils.Optional<UserLocationCountAggregateOutputType> | number
          }
        }
      }
      Report: {
        payload: Prisma.$ReportPayload<ExtArgs>
        fields: Prisma.ReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findFirst: {
            args: Prisma.ReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findMany: {
            args: Prisma.ReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          create: {
            args: Prisma.ReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          createMany: {
            args: Prisma.ReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          delete: {
            args: Prisma.ReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          update: {
            args: Prisma.ReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          deleteMany: {
            args: Prisma.ReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          upsert: {
            args: Prisma.ReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.ReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
          }
        }
      }
      Match: {
        payload: Prisma.$MatchPayload<ExtArgs>
        fields: Prisma.MatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findFirst: {
            args: Prisma.MatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findMany: {
            args: Prisma.MatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          create: {
            args: Prisma.MatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          createMany: {
            args: Prisma.MatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          delete: {
            args: Prisma.MatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          update: {
            args: Prisma.MatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          deleteMany: {
            args: Prisma.MatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          upsert: {
            args: Prisma.MatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          aggregate: {
            args: Prisma.MatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatch>
          }
          groupBy: {
            args: Prisma.MatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchCountArgs<ExtArgs>
            result: $Utils.Optional<MatchCountAggregateOutputType> | number
          }
        }
      }
      View: {
        payload: Prisma.$ViewPayload<ExtArgs>
        fields: Prisma.ViewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ViewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ViewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>
          }
          findFirst: {
            args: Prisma.ViewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ViewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>
          }
          findMany: {
            args: Prisma.ViewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>[]
          }
          create: {
            args: Prisma.ViewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>
          }
          createMany: {
            args: Prisma.ViewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ViewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>[]
          }
          delete: {
            args: Prisma.ViewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>
          }
          update: {
            args: Prisma.ViewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>
          }
          deleteMany: {
            args: Prisma.ViewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ViewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ViewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>[]
          }
          upsert: {
            args: Prisma.ViewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>
          }
          aggregate: {
            args: Prisma.ViewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateView>
          }
          groupBy: {
            args: Prisma.ViewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ViewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ViewCountArgs<ExtArgs>
            result: $Utils.Optional<ViewCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    admin?: AdminOmit
    startupinfo?: StartupinfoOmit
    contactInfo?: ContactInfoOmit
    project?: ProjectOmit
    userLocation?: UserLocationOmit
    report?: ReportOmit
    match?: MatchOmit
    view?: ViewOmit
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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    pastProjects: number
    reportsFiled: number
    reportsReceived: number
    matchesInitiated: number
    matchesReceived: number
    viewsGiven: number
    viewsReceived: number
    Admin: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pastProjects?: boolean | UserCountOutputTypeCountPastProjectsArgs
    reportsFiled?: boolean | UserCountOutputTypeCountReportsFiledArgs
    reportsReceived?: boolean | UserCountOutputTypeCountReportsReceivedArgs
    matchesInitiated?: boolean | UserCountOutputTypeCountMatchesInitiatedArgs
    matchesReceived?: boolean | UserCountOutputTypeCountMatchesReceivedArgs
    viewsGiven?: boolean | UserCountOutputTypeCountViewsGivenArgs
    viewsReceived?: boolean | UserCountOutputTypeCountViewsReceivedArgs
    Admin?: boolean | UserCountOutputTypeCountAdminArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPastProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReportsFiledArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReportsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatchesInitiatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatchesReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountViewsGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountViewsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    yearsExperience: number | null
  }

  export type UserSumAggregateOutputType = {
    yearsExperience: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    avatarUrl: string | null
    location: string | null
    workingStyle: $Enums.WorkingStyle | null
    collaborationPref: $Enums.CollaborationPref | null
    currentRole: string | null
    yearsExperience: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    avatarUrl: string | null
    location: string | null
    workingStyle: $Enums.WorkingStyle | null
    collaborationPref: $Enums.CollaborationPref | null
    currentRole: string | null
    yearsExperience: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    description: number
    avatarUrl: number
    location: number
    personalityTags: number
    workingStyle: number
    collaborationPref: number
    currentRole: number
    yearsExperience: number
    domainExpertise: number
    skills: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    yearsExperience?: true
  }

  export type UserSumAggregateInputType = {
    yearsExperience?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    avatarUrl?: true
    location?: true
    workingStyle?: true
    collaborationPref?: true
    currentRole?: true
    yearsExperience?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    avatarUrl?: true
    location?: true
    workingStyle?: true
    collaborationPref?: true
    currentRole?: true
    yearsExperience?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    avatarUrl?: true
    location?: true
    personalityTags?: true
    workingStyle?: true
    collaborationPref?: true
    currentRole?: true
    yearsExperience?: true
    domainExpertise?: true
    skills?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    description: string | null
    avatarUrl: string | null
    location: string
    personalityTags: string[]
    workingStyle: $Enums.WorkingStyle
    collaborationPref: $Enums.CollaborationPref
    currentRole: string
    yearsExperience: number
    domainExpertise: string[]
    skills: string[]
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    avatarUrl?: boolean
    location?: boolean
    personalityTags?: boolean
    workingStyle?: boolean
    collaborationPref?: boolean
    currentRole?: boolean
    yearsExperience?: boolean
    domainExpertise?: boolean
    skills?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pastProjects?: boolean | User$pastProjectsArgs<ExtArgs>
    startupInfo?: boolean | User$startupInfoArgs<ExtArgs>
    contactInfo?: boolean | User$contactInfoArgs<ExtArgs>
    reportsFiled?: boolean | User$reportsFiledArgs<ExtArgs>
    reportsReceived?: boolean | User$reportsReceivedArgs<ExtArgs>
    matchesInitiated?: boolean | User$matchesInitiatedArgs<ExtArgs>
    matchesReceived?: boolean | User$matchesReceivedArgs<ExtArgs>
    viewsGiven?: boolean | User$viewsGivenArgs<ExtArgs>
    viewsReceived?: boolean | User$viewsReceivedArgs<ExtArgs>
    Admin?: boolean | User$AdminArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    avatarUrl?: boolean
    location?: boolean
    personalityTags?: boolean
    workingStyle?: boolean
    collaborationPref?: boolean
    currentRole?: boolean
    yearsExperience?: boolean
    domainExpertise?: boolean
    skills?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    avatarUrl?: boolean
    location?: boolean
    personalityTags?: boolean
    workingStyle?: boolean
    collaborationPref?: boolean
    currentRole?: boolean
    yearsExperience?: boolean
    domainExpertise?: boolean
    skills?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    avatarUrl?: boolean
    location?: boolean
    personalityTags?: boolean
    workingStyle?: boolean
    collaborationPref?: boolean
    currentRole?: boolean
    yearsExperience?: boolean
    domainExpertise?: boolean
    skills?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "avatarUrl" | "location" | "personalityTags" | "workingStyle" | "collaborationPref" | "currentRole" | "yearsExperience" | "domainExpertise" | "skills" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pastProjects?: boolean | User$pastProjectsArgs<ExtArgs>
    startupInfo?: boolean | User$startupInfoArgs<ExtArgs>
    contactInfo?: boolean | User$contactInfoArgs<ExtArgs>
    reportsFiled?: boolean | User$reportsFiledArgs<ExtArgs>
    reportsReceived?: boolean | User$reportsReceivedArgs<ExtArgs>
    matchesInitiated?: boolean | User$matchesInitiatedArgs<ExtArgs>
    matchesReceived?: boolean | User$matchesReceivedArgs<ExtArgs>
    viewsGiven?: boolean | User$viewsGivenArgs<ExtArgs>
    viewsReceived?: boolean | User$viewsReceivedArgs<ExtArgs>
    Admin?: boolean | User$AdminArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      pastProjects: Prisma.$ProjectPayload<ExtArgs>[]
      startupInfo: Prisma.$StartupinfoPayload<ExtArgs> | null
      contactInfo: Prisma.$ContactInfoPayload<ExtArgs> | null
      reportsFiled: Prisma.$ReportPayload<ExtArgs>[]
      reportsReceived: Prisma.$ReportPayload<ExtArgs>[]
      matchesInitiated: Prisma.$MatchPayload<ExtArgs>[]
      matchesReceived: Prisma.$MatchPayload<ExtArgs>[]
      viewsGiven: Prisma.$ViewPayload<ExtArgs>[]
      viewsReceived: Prisma.$ViewPayload<ExtArgs>[]
      Admin: Prisma.$AdminPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      avatarUrl: string | null
      location: string
      personalityTags: string[]
      workingStyle: $Enums.WorkingStyle
      collaborationPref: $Enums.CollaborationPref
      currentRole: string
      yearsExperience: number
      domainExpertise: string[]
      skills: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pastProjects<T extends User$pastProjectsArgs<ExtArgs> = {}>(args?: Subset<T, User$pastProjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    startupInfo<T extends User$startupInfoArgs<ExtArgs> = {}>(args?: Subset<T, User$startupInfoArgs<ExtArgs>>): Prisma__StartupinfoClient<$Result.GetResult<Prisma.$StartupinfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    contactInfo<T extends User$contactInfoArgs<ExtArgs> = {}>(args?: Subset<T, User$contactInfoArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reportsFiled<T extends User$reportsFiledArgs<ExtArgs> = {}>(args?: Subset<T, User$reportsFiledArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reportsReceived<T extends User$reportsReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$reportsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matchesInitiated<T extends User$matchesInitiatedArgs<ExtArgs> = {}>(args?: Subset<T, User$matchesInitiatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matchesReceived<T extends User$matchesReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$matchesReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    viewsGiven<T extends User$viewsGivenArgs<ExtArgs> = {}>(args?: Subset<T, User$viewsGivenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    viewsReceived<T extends User$viewsReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$viewsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Admin<T extends User$AdminArgs<ExtArgs> = {}>(args?: Subset<T, User$AdminArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly description: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly location: FieldRef<"User", 'String'>
    readonly personalityTags: FieldRef<"User", 'String[]'>
    readonly workingStyle: FieldRef<"User", 'WorkingStyle'>
    readonly collaborationPref: FieldRef<"User", 'CollaborationPref'>
    readonly currentRole: FieldRef<"User", 'String'>
    readonly yearsExperience: FieldRef<"User", 'Int'>
    readonly domainExpertise: FieldRef<"User", 'String[]'>
    readonly skills: FieldRef<"User", 'String[]'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.pastProjects
   */
  export type User$pastProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User.startupInfo
   */
  export type User$startupInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Startupinfo
     */
    select?: StartupinfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Startupinfo
     */
    omit?: StartupinfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupinfoInclude<ExtArgs> | null
    where?: StartupinfoWhereInput
  }

  /**
   * User.contactInfo
   */
  export type User$contactInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoInclude<ExtArgs> | null
    where?: ContactInfoWhereInput
  }

  /**
   * User.reportsFiled
   */
  export type User$reportsFiledArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * User.reportsReceived
   */
  export type User$reportsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * User.matchesInitiated
   */
  export type User$matchesInitiatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * User.matchesReceived
   */
  export type User$matchesReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * User.viewsGiven
   */
  export type User$viewsGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    where?: ViewWhereInput
    orderBy?: ViewOrderByWithRelationInput | ViewOrderByWithRelationInput[]
    cursor?: ViewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewScalarFieldEnum | ViewScalarFieldEnum[]
  }

  /**
   * User.viewsReceived
   */
  export type User$viewsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    where?: ViewWhereInput
    orderBy?: ViewOrderByWithRelationInput | ViewOrderByWithRelationInput[]
    cursor?: ViewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewScalarFieldEnum | ViewScalarFieldEnum[]
  }

  /**
   * User.Admin
   */
  export type User$AdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    cursor?: AdminWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    userId: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    userId?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    userId: string
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    userId?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly userId: FieldRef<"Admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model Startupinfo
   */

  export type AggregateStartupinfo = {
    _count: StartupinfoCountAggregateOutputType | null
    _min: StartupinfoMinAggregateOutputType | null
    _max: StartupinfoMaxAggregateOutputType | null
  }

  export type StartupinfoMinAggregateOutputType = {
    id: string | null
    userId: string | null
    startupStage: $Enums.StartupStage | null
    startupGoals: string | null
    startupCommitment: $Enums.CommitmentLevel | null
  }

  export type StartupinfoMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    startupStage: $Enums.StartupStage | null
    startupGoals: string | null
    startupCommitment: $Enums.CommitmentLevel | null
  }

  export type StartupinfoCountAggregateOutputType = {
    id: number
    userId: number
    startupStage: number
    startupGoals: number
    startupCommitment: number
    lookingFor: number
    _all: number
  }


  export type StartupinfoMinAggregateInputType = {
    id?: true
    userId?: true
    startupStage?: true
    startupGoals?: true
    startupCommitment?: true
  }

  export type StartupinfoMaxAggregateInputType = {
    id?: true
    userId?: true
    startupStage?: true
    startupGoals?: true
    startupCommitment?: true
  }

  export type StartupinfoCountAggregateInputType = {
    id?: true
    userId?: true
    startupStage?: true
    startupGoals?: true
    startupCommitment?: true
    lookingFor?: true
    _all?: true
  }

  export type StartupinfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Startupinfo to aggregate.
     */
    where?: StartupinfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Startupinfos to fetch.
     */
    orderBy?: StartupinfoOrderByWithRelationInput | StartupinfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StartupinfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Startupinfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Startupinfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Startupinfos
    **/
    _count?: true | StartupinfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StartupinfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StartupinfoMaxAggregateInputType
  }

  export type GetStartupinfoAggregateType<T extends StartupinfoAggregateArgs> = {
        [P in keyof T & keyof AggregateStartupinfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStartupinfo[P]>
      : GetScalarType<T[P], AggregateStartupinfo[P]>
  }




  export type StartupinfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StartupinfoWhereInput
    orderBy?: StartupinfoOrderByWithAggregationInput | StartupinfoOrderByWithAggregationInput[]
    by: StartupinfoScalarFieldEnum[] | StartupinfoScalarFieldEnum
    having?: StartupinfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StartupinfoCountAggregateInputType | true
    _min?: StartupinfoMinAggregateInputType
    _max?: StartupinfoMaxAggregateInputType
  }

  export type StartupinfoGroupByOutputType = {
    id: string
    userId: string
    startupStage: $Enums.StartupStage
    startupGoals: string
    startupCommitment: $Enums.CommitmentLevel
    lookingFor: string[]
    _count: StartupinfoCountAggregateOutputType | null
    _min: StartupinfoMinAggregateOutputType | null
    _max: StartupinfoMaxAggregateOutputType | null
  }

  type GetStartupinfoGroupByPayload<T extends StartupinfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StartupinfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StartupinfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StartupinfoGroupByOutputType[P]>
            : GetScalarType<T[P], StartupinfoGroupByOutputType[P]>
        }
      >
    >


  export type StartupinfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    startupStage?: boolean
    startupGoals?: boolean
    startupCommitment?: boolean
    lookingFor?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["startupinfo"]>

  export type StartupinfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    startupStage?: boolean
    startupGoals?: boolean
    startupCommitment?: boolean
    lookingFor?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["startupinfo"]>

  export type StartupinfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    startupStage?: boolean
    startupGoals?: boolean
    startupCommitment?: boolean
    lookingFor?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["startupinfo"]>

  export type StartupinfoSelectScalar = {
    id?: boolean
    userId?: boolean
    startupStage?: boolean
    startupGoals?: boolean
    startupCommitment?: boolean
    lookingFor?: boolean
  }

  export type StartupinfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "startupStage" | "startupGoals" | "startupCommitment" | "lookingFor", ExtArgs["result"]["startupinfo"]>
  export type StartupinfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StartupinfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StartupinfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StartupinfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Startupinfo"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      startupStage: $Enums.StartupStage
      startupGoals: string
      startupCommitment: $Enums.CommitmentLevel
      lookingFor: string[]
    }, ExtArgs["result"]["startupinfo"]>
    composites: {}
  }

  type StartupinfoGetPayload<S extends boolean | null | undefined | StartupinfoDefaultArgs> = $Result.GetResult<Prisma.$StartupinfoPayload, S>

  type StartupinfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StartupinfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StartupinfoCountAggregateInputType | true
    }

  export interface StartupinfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Startupinfo'], meta: { name: 'Startupinfo' } }
    /**
     * Find zero or one Startupinfo that matches the filter.
     * @param {StartupinfoFindUniqueArgs} args - Arguments to find a Startupinfo
     * @example
     * // Get one Startupinfo
     * const startupinfo = await prisma.startupinfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StartupinfoFindUniqueArgs>(args: SelectSubset<T, StartupinfoFindUniqueArgs<ExtArgs>>): Prisma__StartupinfoClient<$Result.GetResult<Prisma.$StartupinfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Startupinfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StartupinfoFindUniqueOrThrowArgs} args - Arguments to find a Startupinfo
     * @example
     * // Get one Startupinfo
     * const startupinfo = await prisma.startupinfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StartupinfoFindUniqueOrThrowArgs>(args: SelectSubset<T, StartupinfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StartupinfoClient<$Result.GetResult<Prisma.$StartupinfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Startupinfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StartupinfoFindFirstArgs} args - Arguments to find a Startupinfo
     * @example
     * // Get one Startupinfo
     * const startupinfo = await prisma.startupinfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StartupinfoFindFirstArgs>(args?: SelectSubset<T, StartupinfoFindFirstArgs<ExtArgs>>): Prisma__StartupinfoClient<$Result.GetResult<Prisma.$StartupinfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Startupinfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StartupinfoFindFirstOrThrowArgs} args - Arguments to find a Startupinfo
     * @example
     * // Get one Startupinfo
     * const startupinfo = await prisma.startupinfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StartupinfoFindFirstOrThrowArgs>(args?: SelectSubset<T, StartupinfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__StartupinfoClient<$Result.GetResult<Prisma.$StartupinfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Startupinfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StartupinfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Startupinfos
     * const startupinfos = await prisma.startupinfo.findMany()
     * 
     * // Get first 10 Startupinfos
     * const startupinfos = await prisma.startupinfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const startupinfoWithIdOnly = await prisma.startupinfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StartupinfoFindManyArgs>(args?: SelectSubset<T, StartupinfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StartupinfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Startupinfo.
     * @param {StartupinfoCreateArgs} args - Arguments to create a Startupinfo.
     * @example
     * // Create one Startupinfo
     * const Startupinfo = await prisma.startupinfo.create({
     *   data: {
     *     // ... data to create a Startupinfo
     *   }
     * })
     * 
     */
    create<T extends StartupinfoCreateArgs>(args: SelectSubset<T, StartupinfoCreateArgs<ExtArgs>>): Prisma__StartupinfoClient<$Result.GetResult<Prisma.$StartupinfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Startupinfos.
     * @param {StartupinfoCreateManyArgs} args - Arguments to create many Startupinfos.
     * @example
     * // Create many Startupinfos
     * const startupinfo = await prisma.startupinfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StartupinfoCreateManyArgs>(args?: SelectSubset<T, StartupinfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Startupinfos and returns the data saved in the database.
     * @param {StartupinfoCreateManyAndReturnArgs} args - Arguments to create many Startupinfos.
     * @example
     * // Create many Startupinfos
     * const startupinfo = await prisma.startupinfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Startupinfos and only return the `id`
     * const startupinfoWithIdOnly = await prisma.startupinfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StartupinfoCreateManyAndReturnArgs>(args?: SelectSubset<T, StartupinfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StartupinfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Startupinfo.
     * @param {StartupinfoDeleteArgs} args - Arguments to delete one Startupinfo.
     * @example
     * // Delete one Startupinfo
     * const Startupinfo = await prisma.startupinfo.delete({
     *   where: {
     *     // ... filter to delete one Startupinfo
     *   }
     * })
     * 
     */
    delete<T extends StartupinfoDeleteArgs>(args: SelectSubset<T, StartupinfoDeleteArgs<ExtArgs>>): Prisma__StartupinfoClient<$Result.GetResult<Prisma.$StartupinfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Startupinfo.
     * @param {StartupinfoUpdateArgs} args - Arguments to update one Startupinfo.
     * @example
     * // Update one Startupinfo
     * const startupinfo = await prisma.startupinfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StartupinfoUpdateArgs>(args: SelectSubset<T, StartupinfoUpdateArgs<ExtArgs>>): Prisma__StartupinfoClient<$Result.GetResult<Prisma.$StartupinfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Startupinfos.
     * @param {StartupinfoDeleteManyArgs} args - Arguments to filter Startupinfos to delete.
     * @example
     * // Delete a few Startupinfos
     * const { count } = await prisma.startupinfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StartupinfoDeleteManyArgs>(args?: SelectSubset<T, StartupinfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Startupinfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StartupinfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Startupinfos
     * const startupinfo = await prisma.startupinfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StartupinfoUpdateManyArgs>(args: SelectSubset<T, StartupinfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Startupinfos and returns the data updated in the database.
     * @param {StartupinfoUpdateManyAndReturnArgs} args - Arguments to update many Startupinfos.
     * @example
     * // Update many Startupinfos
     * const startupinfo = await prisma.startupinfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Startupinfos and only return the `id`
     * const startupinfoWithIdOnly = await prisma.startupinfo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StartupinfoUpdateManyAndReturnArgs>(args: SelectSubset<T, StartupinfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StartupinfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Startupinfo.
     * @param {StartupinfoUpsertArgs} args - Arguments to update or create a Startupinfo.
     * @example
     * // Update or create a Startupinfo
     * const startupinfo = await prisma.startupinfo.upsert({
     *   create: {
     *     // ... data to create a Startupinfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Startupinfo we want to update
     *   }
     * })
     */
    upsert<T extends StartupinfoUpsertArgs>(args: SelectSubset<T, StartupinfoUpsertArgs<ExtArgs>>): Prisma__StartupinfoClient<$Result.GetResult<Prisma.$StartupinfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Startupinfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StartupinfoCountArgs} args - Arguments to filter Startupinfos to count.
     * @example
     * // Count the number of Startupinfos
     * const count = await prisma.startupinfo.count({
     *   where: {
     *     // ... the filter for the Startupinfos we want to count
     *   }
     * })
    **/
    count<T extends StartupinfoCountArgs>(
      args?: Subset<T, StartupinfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StartupinfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Startupinfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StartupinfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StartupinfoAggregateArgs>(args: Subset<T, StartupinfoAggregateArgs>): Prisma.PrismaPromise<GetStartupinfoAggregateType<T>>

    /**
     * Group by Startupinfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StartupinfoGroupByArgs} args - Group by arguments.
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
      T extends StartupinfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StartupinfoGroupByArgs['orderBy'] }
        : { orderBy?: StartupinfoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StartupinfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStartupinfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Startupinfo model
   */
  readonly fields: StartupinfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Startupinfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StartupinfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Startupinfo model
   */
  interface StartupinfoFieldRefs {
    readonly id: FieldRef<"Startupinfo", 'String'>
    readonly userId: FieldRef<"Startupinfo", 'String'>
    readonly startupStage: FieldRef<"Startupinfo", 'StartupStage'>
    readonly startupGoals: FieldRef<"Startupinfo", 'String'>
    readonly startupCommitment: FieldRef<"Startupinfo", 'CommitmentLevel'>
    readonly lookingFor: FieldRef<"Startupinfo", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Startupinfo findUnique
   */
  export type StartupinfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Startupinfo
     */
    select?: StartupinfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Startupinfo
     */
    omit?: StartupinfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupinfoInclude<ExtArgs> | null
    /**
     * Filter, which Startupinfo to fetch.
     */
    where: StartupinfoWhereUniqueInput
  }

  /**
   * Startupinfo findUniqueOrThrow
   */
  export type StartupinfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Startupinfo
     */
    select?: StartupinfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Startupinfo
     */
    omit?: StartupinfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupinfoInclude<ExtArgs> | null
    /**
     * Filter, which Startupinfo to fetch.
     */
    where: StartupinfoWhereUniqueInput
  }

  /**
   * Startupinfo findFirst
   */
  export type StartupinfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Startupinfo
     */
    select?: StartupinfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Startupinfo
     */
    omit?: StartupinfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupinfoInclude<ExtArgs> | null
    /**
     * Filter, which Startupinfo to fetch.
     */
    where?: StartupinfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Startupinfos to fetch.
     */
    orderBy?: StartupinfoOrderByWithRelationInput | StartupinfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Startupinfos.
     */
    cursor?: StartupinfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Startupinfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Startupinfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Startupinfos.
     */
    distinct?: StartupinfoScalarFieldEnum | StartupinfoScalarFieldEnum[]
  }

  /**
   * Startupinfo findFirstOrThrow
   */
  export type StartupinfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Startupinfo
     */
    select?: StartupinfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Startupinfo
     */
    omit?: StartupinfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupinfoInclude<ExtArgs> | null
    /**
     * Filter, which Startupinfo to fetch.
     */
    where?: StartupinfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Startupinfos to fetch.
     */
    orderBy?: StartupinfoOrderByWithRelationInput | StartupinfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Startupinfos.
     */
    cursor?: StartupinfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Startupinfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Startupinfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Startupinfos.
     */
    distinct?: StartupinfoScalarFieldEnum | StartupinfoScalarFieldEnum[]
  }

  /**
   * Startupinfo findMany
   */
  export type StartupinfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Startupinfo
     */
    select?: StartupinfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Startupinfo
     */
    omit?: StartupinfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupinfoInclude<ExtArgs> | null
    /**
     * Filter, which Startupinfos to fetch.
     */
    where?: StartupinfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Startupinfos to fetch.
     */
    orderBy?: StartupinfoOrderByWithRelationInput | StartupinfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Startupinfos.
     */
    cursor?: StartupinfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Startupinfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Startupinfos.
     */
    skip?: number
    distinct?: StartupinfoScalarFieldEnum | StartupinfoScalarFieldEnum[]
  }

  /**
   * Startupinfo create
   */
  export type StartupinfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Startupinfo
     */
    select?: StartupinfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Startupinfo
     */
    omit?: StartupinfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupinfoInclude<ExtArgs> | null
    /**
     * The data needed to create a Startupinfo.
     */
    data: XOR<StartupinfoCreateInput, StartupinfoUncheckedCreateInput>
  }

  /**
   * Startupinfo createMany
   */
  export type StartupinfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Startupinfos.
     */
    data: StartupinfoCreateManyInput | StartupinfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Startupinfo createManyAndReturn
   */
  export type StartupinfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Startupinfo
     */
    select?: StartupinfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Startupinfo
     */
    omit?: StartupinfoOmit<ExtArgs> | null
    /**
     * The data used to create many Startupinfos.
     */
    data: StartupinfoCreateManyInput | StartupinfoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupinfoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Startupinfo update
   */
  export type StartupinfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Startupinfo
     */
    select?: StartupinfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Startupinfo
     */
    omit?: StartupinfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupinfoInclude<ExtArgs> | null
    /**
     * The data needed to update a Startupinfo.
     */
    data: XOR<StartupinfoUpdateInput, StartupinfoUncheckedUpdateInput>
    /**
     * Choose, which Startupinfo to update.
     */
    where: StartupinfoWhereUniqueInput
  }

  /**
   * Startupinfo updateMany
   */
  export type StartupinfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Startupinfos.
     */
    data: XOR<StartupinfoUpdateManyMutationInput, StartupinfoUncheckedUpdateManyInput>
    /**
     * Filter which Startupinfos to update
     */
    where?: StartupinfoWhereInput
    /**
     * Limit how many Startupinfos to update.
     */
    limit?: number
  }

  /**
   * Startupinfo updateManyAndReturn
   */
  export type StartupinfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Startupinfo
     */
    select?: StartupinfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Startupinfo
     */
    omit?: StartupinfoOmit<ExtArgs> | null
    /**
     * The data used to update Startupinfos.
     */
    data: XOR<StartupinfoUpdateManyMutationInput, StartupinfoUncheckedUpdateManyInput>
    /**
     * Filter which Startupinfos to update
     */
    where?: StartupinfoWhereInput
    /**
     * Limit how many Startupinfos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupinfoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Startupinfo upsert
   */
  export type StartupinfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Startupinfo
     */
    select?: StartupinfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Startupinfo
     */
    omit?: StartupinfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupinfoInclude<ExtArgs> | null
    /**
     * The filter to search for the Startupinfo to update in case it exists.
     */
    where: StartupinfoWhereUniqueInput
    /**
     * In case the Startupinfo found by the `where` argument doesn't exist, create a new Startupinfo with this data.
     */
    create: XOR<StartupinfoCreateInput, StartupinfoUncheckedCreateInput>
    /**
     * In case the Startupinfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StartupinfoUpdateInput, StartupinfoUncheckedUpdateInput>
  }

  /**
   * Startupinfo delete
   */
  export type StartupinfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Startupinfo
     */
    select?: StartupinfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Startupinfo
     */
    omit?: StartupinfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupinfoInclude<ExtArgs> | null
    /**
     * Filter which Startupinfo to delete.
     */
    where: StartupinfoWhereUniqueInput
  }

  /**
   * Startupinfo deleteMany
   */
  export type StartupinfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Startupinfos to delete
     */
    where?: StartupinfoWhereInput
    /**
     * Limit how many Startupinfos to delete.
     */
    limit?: number
  }

  /**
   * Startupinfo without action
   */
  export type StartupinfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Startupinfo
     */
    select?: StartupinfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Startupinfo
     */
    omit?: StartupinfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupinfoInclude<ExtArgs> | null
  }


  /**
   * Model ContactInfo
   */

  export type AggregateContactInfo = {
    _count: ContactInfoCountAggregateOutputType | null
    _min: ContactInfoMinAggregateOutputType | null
    _max: ContactInfoMaxAggregateOutputType | null
  }

  export type ContactInfoMinAggregateOutputType = {
    id: string | null
    userId: string | null
    email: string | null
    twitterUrl: string | null
    linkedinUrl: string | null
    scheduleUrl: string | null
  }

  export type ContactInfoMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    email: string | null
    twitterUrl: string | null
    linkedinUrl: string | null
    scheduleUrl: string | null
  }

  export type ContactInfoCountAggregateOutputType = {
    id: number
    userId: number
    email: number
    twitterUrl: number
    linkedinUrl: number
    scheduleUrl: number
    _all: number
  }


  export type ContactInfoMinAggregateInputType = {
    id?: true
    userId?: true
    email?: true
    twitterUrl?: true
    linkedinUrl?: true
    scheduleUrl?: true
  }

  export type ContactInfoMaxAggregateInputType = {
    id?: true
    userId?: true
    email?: true
    twitterUrl?: true
    linkedinUrl?: true
    scheduleUrl?: true
  }

  export type ContactInfoCountAggregateInputType = {
    id?: true
    userId?: true
    email?: true
    twitterUrl?: true
    linkedinUrl?: true
    scheduleUrl?: true
    _all?: true
  }

  export type ContactInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactInfo to aggregate.
     */
    where?: ContactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfos to fetch.
     */
    orderBy?: ContactInfoOrderByWithRelationInput | ContactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactInfos
    **/
    _count?: true | ContactInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactInfoMaxAggregateInputType
  }

  export type GetContactInfoAggregateType<T extends ContactInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateContactInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactInfo[P]>
      : GetScalarType<T[P], AggregateContactInfo[P]>
  }




  export type ContactInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactInfoWhereInput
    orderBy?: ContactInfoOrderByWithAggregationInput | ContactInfoOrderByWithAggregationInput[]
    by: ContactInfoScalarFieldEnum[] | ContactInfoScalarFieldEnum
    having?: ContactInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactInfoCountAggregateInputType | true
    _min?: ContactInfoMinAggregateInputType
    _max?: ContactInfoMaxAggregateInputType
  }

  export type ContactInfoGroupByOutputType = {
    id: string
    userId: string
    email: string | null
    twitterUrl: string | null
    linkedinUrl: string | null
    scheduleUrl: string | null
    _count: ContactInfoCountAggregateOutputType | null
    _min: ContactInfoMinAggregateOutputType | null
    _max: ContactInfoMaxAggregateOutputType | null
  }

  type GetContactInfoGroupByPayload<T extends ContactInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactInfoGroupByOutputType[P]>
            : GetScalarType<T[P], ContactInfoGroupByOutputType[P]>
        }
      >
    >


  export type ContactInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    email?: boolean
    twitterUrl?: boolean
    linkedinUrl?: boolean
    scheduleUrl?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactInfo"]>

  export type ContactInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    email?: boolean
    twitterUrl?: boolean
    linkedinUrl?: boolean
    scheduleUrl?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactInfo"]>

  export type ContactInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    email?: boolean
    twitterUrl?: boolean
    linkedinUrl?: boolean
    scheduleUrl?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactInfo"]>

  export type ContactInfoSelectScalar = {
    id?: boolean
    userId?: boolean
    email?: boolean
    twitterUrl?: boolean
    linkedinUrl?: boolean
    scheduleUrl?: boolean
  }

  export type ContactInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "email" | "twitterUrl" | "linkedinUrl" | "scheduleUrl", ExtArgs["result"]["contactInfo"]>
  export type ContactInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ContactInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ContactInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ContactInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactInfo"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      email: string | null
      twitterUrl: string | null
      linkedinUrl: string | null
      scheduleUrl: string | null
    }, ExtArgs["result"]["contactInfo"]>
    composites: {}
  }

  type ContactInfoGetPayload<S extends boolean | null | undefined | ContactInfoDefaultArgs> = $Result.GetResult<Prisma.$ContactInfoPayload, S>

  type ContactInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactInfoCountAggregateInputType | true
    }

  export interface ContactInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactInfo'], meta: { name: 'ContactInfo' } }
    /**
     * Find zero or one ContactInfo that matches the filter.
     * @param {ContactInfoFindUniqueArgs} args - Arguments to find a ContactInfo
     * @example
     * // Get one ContactInfo
     * const contactInfo = await prisma.contactInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactInfoFindUniqueArgs>(args: SelectSubset<T, ContactInfoFindUniqueArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactInfoFindUniqueOrThrowArgs} args - Arguments to find a ContactInfo
     * @example
     * // Get one ContactInfo
     * const contactInfo = await prisma.contactInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoFindFirstArgs} args - Arguments to find a ContactInfo
     * @example
     * // Get one ContactInfo
     * const contactInfo = await prisma.contactInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactInfoFindFirstArgs>(args?: SelectSubset<T, ContactInfoFindFirstArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoFindFirstOrThrowArgs} args - Arguments to find a ContactInfo
     * @example
     * // Get one ContactInfo
     * const contactInfo = await prisma.contactInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactInfos
     * const contactInfos = await prisma.contactInfo.findMany()
     * 
     * // Get first 10 ContactInfos
     * const contactInfos = await prisma.contactInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactInfoWithIdOnly = await prisma.contactInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactInfoFindManyArgs>(args?: SelectSubset<T, ContactInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactInfo.
     * @param {ContactInfoCreateArgs} args - Arguments to create a ContactInfo.
     * @example
     * // Create one ContactInfo
     * const ContactInfo = await prisma.contactInfo.create({
     *   data: {
     *     // ... data to create a ContactInfo
     *   }
     * })
     * 
     */
    create<T extends ContactInfoCreateArgs>(args: SelectSubset<T, ContactInfoCreateArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactInfos.
     * @param {ContactInfoCreateManyArgs} args - Arguments to create many ContactInfos.
     * @example
     * // Create many ContactInfos
     * const contactInfo = await prisma.contactInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactInfoCreateManyArgs>(args?: SelectSubset<T, ContactInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactInfos and returns the data saved in the database.
     * @param {ContactInfoCreateManyAndReturnArgs} args - Arguments to create many ContactInfos.
     * @example
     * // Create many ContactInfos
     * const contactInfo = await prisma.contactInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactInfos and only return the `id`
     * const contactInfoWithIdOnly = await prisma.contactInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactInfo.
     * @param {ContactInfoDeleteArgs} args - Arguments to delete one ContactInfo.
     * @example
     * // Delete one ContactInfo
     * const ContactInfo = await prisma.contactInfo.delete({
     *   where: {
     *     // ... filter to delete one ContactInfo
     *   }
     * })
     * 
     */
    delete<T extends ContactInfoDeleteArgs>(args: SelectSubset<T, ContactInfoDeleteArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactInfo.
     * @param {ContactInfoUpdateArgs} args - Arguments to update one ContactInfo.
     * @example
     * // Update one ContactInfo
     * const contactInfo = await prisma.contactInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactInfoUpdateArgs>(args: SelectSubset<T, ContactInfoUpdateArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactInfos.
     * @param {ContactInfoDeleteManyArgs} args - Arguments to filter ContactInfos to delete.
     * @example
     * // Delete a few ContactInfos
     * const { count } = await prisma.contactInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactInfoDeleteManyArgs>(args?: SelectSubset<T, ContactInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactInfos
     * const contactInfo = await prisma.contactInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactInfoUpdateManyArgs>(args: SelectSubset<T, ContactInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactInfos and returns the data updated in the database.
     * @param {ContactInfoUpdateManyAndReturnArgs} args - Arguments to update many ContactInfos.
     * @example
     * // Update many ContactInfos
     * const contactInfo = await prisma.contactInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactInfos and only return the `id`
     * const contactInfoWithIdOnly = await prisma.contactInfo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactInfo.
     * @param {ContactInfoUpsertArgs} args - Arguments to update or create a ContactInfo.
     * @example
     * // Update or create a ContactInfo
     * const contactInfo = await prisma.contactInfo.upsert({
     *   create: {
     *     // ... data to create a ContactInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactInfo we want to update
     *   }
     * })
     */
    upsert<T extends ContactInfoUpsertArgs>(args: SelectSubset<T, ContactInfoUpsertArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoCountArgs} args - Arguments to filter ContactInfos to count.
     * @example
     * // Count the number of ContactInfos
     * const count = await prisma.contactInfo.count({
     *   where: {
     *     // ... the filter for the ContactInfos we want to count
     *   }
     * })
    **/
    count<T extends ContactInfoCountArgs>(
      args?: Subset<T, ContactInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactInfoAggregateArgs>(args: Subset<T, ContactInfoAggregateArgs>): Prisma.PrismaPromise<GetContactInfoAggregateType<T>>

    /**
     * Group by ContactInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoGroupByArgs} args - Group by arguments.
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
      T extends ContactInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactInfoGroupByArgs['orderBy'] }
        : { orderBy?: ContactInfoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactInfo model
   */
  readonly fields: ContactInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ContactInfo model
   */
  interface ContactInfoFieldRefs {
    readonly id: FieldRef<"ContactInfo", 'String'>
    readonly userId: FieldRef<"ContactInfo", 'String'>
    readonly email: FieldRef<"ContactInfo", 'String'>
    readonly twitterUrl: FieldRef<"ContactInfo", 'String'>
    readonly linkedinUrl: FieldRef<"ContactInfo", 'String'>
    readonly scheduleUrl: FieldRef<"ContactInfo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ContactInfo findUnique
   */
  export type ContactInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoInclude<ExtArgs> | null
    /**
     * Filter, which ContactInfo to fetch.
     */
    where: ContactInfoWhereUniqueInput
  }

  /**
   * ContactInfo findUniqueOrThrow
   */
  export type ContactInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoInclude<ExtArgs> | null
    /**
     * Filter, which ContactInfo to fetch.
     */
    where: ContactInfoWhereUniqueInput
  }

  /**
   * ContactInfo findFirst
   */
  export type ContactInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoInclude<ExtArgs> | null
    /**
     * Filter, which ContactInfo to fetch.
     */
    where?: ContactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfos to fetch.
     */
    orderBy?: ContactInfoOrderByWithRelationInput | ContactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactInfos.
     */
    cursor?: ContactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactInfos.
     */
    distinct?: ContactInfoScalarFieldEnum | ContactInfoScalarFieldEnum[]
  }

  /**
   * ContactInfo findFirstOrThrow
   */
  export type ContactInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoInclude<ExtArgs> | null
    /**
     * Filter, which ContactInfo to fetch.
     */
    where?: ContactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfos to fetch.
     */
    orderBy?: ContactInfoOrderByWithRelationInput | ContactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactInfos.
     */
    cursor?: ContactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactInfos.
     */
    distinct?: ContactInfoScalarFieldEnum | ContactInfoScalarFieldEnum[]
  }

  /**
   * ContactInfo findMany
   */
  export type ContactInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoInclude<ExtArgs> | null
    /**
     * Filter, which ContactInfos to fetch.
     */
    where?: ContactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfos to fetch.
     */
    orderBy?: ContactInfoOrderByWithRelationInput | ContactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactInfos.
     */
    cursor?: ContactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfos.
     */
    skip?: number
    distinct?: ContactInfoScalarFieldEnum | ContactInfoScalarFieldEnum[]
  }

  /**
   * ContactInfo create
   */
  export type ContactInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a ContactInfo.
     */
    data: XOR<ContactInfoCreateInput, ContactInfoUncheckedCreateInput>
  }

  /**
   * ContactInfo createMany
   */
  export type ContactInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactInfos.
     */
    data: ContactInfoCreateManyInput | ContactInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactInfo createManyAndReturn
   */
  export type ContactInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * The data used to create many ContactInfos.
     */
    data: ContactInfoCreateManyInput | ContactInfoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContactInfo update
   */
  export type ContactInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a ContactInfo.
     */
    data: XOR<ContactInfoUpdateInput, ContactInfoUncheckedUpdateInput>
    /**
     * Choose, which ContactInfo to update.
     */
    where: ContactInfoWhereUniqueInput
  }

  /**
   * ContactInfo updateMany
   */
  export type ContactInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactInfos.
     */
    data: XOR<ContactInfoUpdateManyMutationInput, ContactInfoUncheckedUpdateManyInput>
    /**
     * Filter which ContactInfos to update
     */
    where?: ContactInfoWhereInput
    /**
     * Limit how many ContactInfos to update.
     */
    limit?: number
  }

  /**
   * ContactInfo updateManyAndReturn
   */
  export type ContactInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * The data used to update ContactInfos.
     */
    data: XOR<ContactInfoUpdateManyMutationInput, ContactInfoUncheckedUpdateManyInput>
    /**
     * Filter which ContactInfos to update
     */
    where?: ContactInfoWhereInput
    /**
     * Limit how many ContactInfos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContactInfo upsert
   */
  export type ContactInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the ContactInfo to update in case it exists.
     */
    where: ContactInfoWhereUniqueInput
    /**
     * In case the ContactInfo found by the `where` argument doesn't exist, create a new ContactInfo with this data.
     */
    create: XOR<ContactInfoCreateInput, ContactInfoUncheckedCreateInput>
    /**
     * In case the ContactInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactInfoUpdateInput, ContactInfoUncheckedUpdateInput>
  }

  /**
   * ContactInfo delete
   */
  export type ContactInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoInclude<ExtArgs> | null
    /**
     * Filter which ContactInfo to delete.
     */
    where: ContactInfoWhereUniqueInput
  }

  /**
   * ContactInfo deleteMany
   */
  export type ContactInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactInfos to delete
     */
    where?: ContactInfoWhereInput
    /**
     * Limit how many ContactInfos to delete.
     */
    limit?: number
  }

  /**
   * ContactInfo without action
   */
  export type ContactInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    link: string | null
    userId: string | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    link: string | null
    userId: string | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    description: number
    link: number
    userId: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    link?: true
    userId?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    link?: true
    userId?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    link?: true
    userId?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    name: string
    description: string
    link: string | null
    userId: string
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    link?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    link?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    link?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    link?: boolean
    userId?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "link" | "userId", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      link: string | null
      userId: string
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly link: FieldRef<"Project", 'String'>
    readonly userId: FieldRef<"Project", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model UserLocation
   */

  export type AggregateUserLocation = {
    _count: UserLocationCountAggregateOutputType | null
    _avg: UserLocationAvgAggregateOutputType | null
    _sum: UserLocationSumAggregateOutputType | null
    _min: UserLocationMinAggregateOutputType | null
    _max: UserLocationMaxAggregateOutputType | null
  }

  export type UserLocationAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type UserLocationSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type UserLocationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    latitude: number | null
    longitude: number | null
    geohash: string | null
  }

  export type UserLocationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    latitude: number | null
    longitude: number | null
    geohash: string | null
  }

  export type UserLocationCountAggregateOutputType = {
    id: number
    userId: number
    latitude: number
    longitude: number
    geohash: number
    _all: number
  }


  export type UserLocationAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type UserLocationSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type UserLocationMinAggregateInputType = {
    id?: true
    userId?: true
    latitude?: true
    longitude?: true
    geohash?: true
  }

  export type UserLocationMaxAggregateInputType = {
    id?: true
    userId?: true
    latitude?: true
    longitude?: true
    geohash?: true
  }

  export type UserLocationCountAggregateInputType = {
    id?: true
    userId?: true
    latitude?: true
    longitude?: true
    geohash?: true
    _all?: true
  }

  export type UserLocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLocation to aggregate.
     */
    where?: UserLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLocations to fetch.
     */
    orderBy?: UserLocationOrderByWithRelationInput | UserLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserLocations
    **/
    _count?: true | UserLocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserLocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserLocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserLocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserLocationMaxAggregateInputType
  }

  export type GetUserLocationAggregateType<T extends UserLocationAggregateArgs> = {
        [P in keyof T & keyof AggregateUserLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserLocation[P]>
      : GetScalarType<T[P], AggregateUserLocation[P]>
  }




  export type UserLocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLocationWhereInput
    orderBy?: UserLocationOrderByWithAggregationInput | UserLocationOrderByWithAggregationInput[]
    by: UserLocationScalarFieldEnum[] | UserLocationScalarFieldEnum
    having?: UserLocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserLocationCountAggregateInputType | true
    _avg?: UserLocationAvgAggregateInputType
    _sum?: UserLocationSumAggregateInputType
    _min?: UserLocationMinAggregateInputType
    _max?: UserLocationMaxAggregateInputType
  }

  export type UserLocationGroupByOutputType = {
    id: string
    userId: string
    latitude: number
    longitude: number
    geohash: string
    _count: UserLocationCountAggregateOutputType | null
    _avg: UserLocationAvgAggregateOutputType | null
    _sum: UserLocationSumAggregateOutputType | null
    _min: UserLocationMinAggregateOutputType | null
    _max: UserLocationMaxAggregateOutputType | null
  }

  type GetUserLocationGroupByPayload<T extends UserLocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserLocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserLocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserLocationGroupByOutputType[P]>
            : GetScalarType<T[P], UserLocationGroupByOutputType[P]>
        }
      >
    >


  export type UserLocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    latitude?: boolean
    longitude?: boolean
    geohash?: boolean
  }, ExtArgs["result"]["userLocation"]>

  export type UserLocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    latitude?: boolean
    longitude?: boolean
    geohash?: boolean
  }, ExtArgs["result"]["userLocation"]>

  export type UserLocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    latitude?: boolean
    longitude?: boolean
    geohash?: boolean
  }, ExtArgs["result"]["userLocation"]>

  export type UserLocationSelectScalar = {
    id?: boolean
    userId?: boolean
    latitude?: boolean
    longitude?: boolean
    geohash?: boolean
  }

  export type UserLocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "latitude" | "longitude" | "geohash", ExtArgs["result"]["userLocation"]>

  export type $UserLocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserLocation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      latitude: number
      longitude: number
      geohash: string
    }, ExtArgs["result"]["userLocation"]>
    composites: {}
  }

  type UserLocationGetPayload<S extends boolean | null | undefined | UserLocationDefaultArgs> = $Result.GetResult<Prisma.$UserLocationPayload, S>

  type UserLocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserLocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserLocationCountAggregateInputType | true
    }

  export interface UserLocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserLocation'], meta: { name: 'UserLocation' } }
    /**
     * Find zero or one UserLocation that matches the filter.
     * @param {UserLocationFindUniqueArgs} args - Arguments to find a UserLocation
     * @example
     * // Get one UserLocation
     * const userLocation = await prisma.userLocation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserLocationFindUniqueArgs>(args: SelectSubset<T, UserLocationFindUniqueArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserLocation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserLocationFindUniqueOrThrowArgs} args - Arguments to find a UserLocation
     * @example
     * // Get one UserLocation
     * const userLocation = await prisma.userLocation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserLocationFindUniqueOrThrowArgs>(args: SelectSubset<T, UserLocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLocation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationFindFirstArgs} args - Arguments to find a UserLocation
     * @example
     * // Get one UserLocation
     * const userLocation = await prisma.userLocation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserLocationFindFirstArgs>(args?: SelectSubset<T, UserLocationFindFirstArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLocation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationFindFirstOrThrowArgs} args - Arguments to find a UserLocation
     * @example
     * // Get one UserLocation
     * const userLocation = await prisma.userLocation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserLocationFindFirstOrThrowArgs>(args?: SelectSubset<T, UserLocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserLocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserLocations
     * const userLocations = await prisma.userLocation.findMany()
     * 
     * // Get first 10 UserLocations
     * const userLocations = await prisma.userLocation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userLocationWithIdOnly = await prisma.userLocation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserLocationFindManyArgs>(args?: SelectSubset<T, UserLocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserLocation.
     * @param {UserLocationCreateArgs} args - Arguments to create a UserLocation.
     * @example
     * // Create one UserLocation
     * const UserLocation = await prisma.userLocation.create({
     *   data: {
     *     // ... data to create a UserLocation
     *   }
     * })
     * 
     */
    create<T extends UserLocationCreateArgs>(args: SelectSubset<T, UserLocationCreateArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserLocations.
     * @param {UserLocationCreateManyArgs} args - Arguments to create many UserLocations.
     * @example
     * // Create many UserLocations
     * const userLocation = await prisma.userLocation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserLocationCreateManyArgs>(args?: SelectSubset<T, UserLocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserLocations and returns the data saved in the database.
     * @param {UserLocationCreateManyAndReturnArgs} args - Arguments to create many UserLocations.
     * @example
     * // Create many UserLocations
     * const userLocation = await prisma.userLocation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserLocations and only return the `id`
     * const userLocationWithIdOnly = await prisma.userLocation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserLocationCreateManyAndReturnArgs>(args?: SelectSubset<T, UserLocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserLocation.
     * @param {UserLocationDeleteArgs} args - Arguments to delete one UserLocation.
     * @example
     * // Delete one UserLocation
     * const UserLocation = await prisma.userLocation.delete({
     *   where: {
     *     // ... filter to delete one UserLocation
     *   }
     * })
     * 
     */
    delete<T extends UserLocationDeleteArgs>(args: SelectSubset<T, UserLocationDeleteArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserLocation.
     * @param {UserLocationUpdateArgs} args - Arguments to update one UserLocation.
     * @example
     * // Update one UserLocation
     * const userLocation = await prisma.userLocation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserLocationUpdateArgs>(args: SelectSubset<T, UserLocationUpdateArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserLocations.
     * @param {UserLocationDeleteManyArgs} args - Arguments to filter UserLocations to delete.
     * @example
     * // Delete a few UserLocations
     * const { count } = await prisma.userLocation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserLocationDeleteManyArgs>(args?: SelectSubset<T, UserLocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserLocations
     * const userLocation = await prisma.userLocation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserLocationUpdateManyArgs>(args: SelectSubset<T, UserLocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLocations and returns the data updated in the database.
     * @param {UserLocationUpdateManyAndReturnArgs} args - Arguments to update many UserLocations.
     * @example
     * // Update many UserLocations
     * const userLocation = await prisma.userLocation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserLocations and only return the `id`
     * const userLocationWithIdOnly = await prisma.userLocation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserLocationUpdateManyAndReturnArgs>(args: SelectSubset<T, UserLocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserLocation.
     * @param {UserLocationUpsertArgs} args - Arguments to update or create a UserLocation.
     * @example
     * // Update or create a UserLocation
     * const userLocation = await prisma.userLocation.upsert({
     *   create: {
     *     // ... data to create a UserLocation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserLocation we want to update
     *   }
     * })
     */
    upsert<T extends UserLocationUpsertArgs>(args: SelectSubset<T, UserLocationUpsertArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationCountArgs} args - Arguments to filter UserLocations to count.
     * @example
     * // Count the number of UserLocations
     * const count = await prisma.userLocation.count({
     *   where: {
     *     // ... the filter for the UserLocations we want to count
     *   }
     * })
    **/
    count<T extends UserLocationCountArgs>(
      args?: Subset<T, UserLocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserLocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserLocationAggregateArgs>(args: Subset<T, UserLocationAggregateArgs>): Prisma.PrismaPromise<GetUserLocationAggregateType<T>>

    /**
     * Group by UserLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationGroupByArgs} args - Group by arguments.
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
      T extends UserLocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserLocationGroupByArgs['orderBy'] }
        : { orderBy?: UserLocationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserLocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserLocation model
   */
  readonly fields: UserLocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserLocation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserLocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the UserLocation model
   */
  interface UserLocationFieldRefs {
    readonly id: FieldRef<"UserLocation", 'String'>
    readonly userId: FieldRef<"UserLocation", 'String'>
    readonly latitude: FieldRef<"UserLocation", 'Float'>
    readonly longitude: FieldRef<"UserLocation", 'Float'>
    readonly geohash: FieldRef<"UserLocation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserLocation findUnique
   */
  export type UserLocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * Filter, which UserLocation to fetch.
     */
    where: UserLocationWhereUniqueInput
  }

  /**
   * UserLocation findUniqueOrThrow
   */
  export type UserLocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * Filter, which UserLocation to fetch.
     */
    where: UserLocationWhereUniqueInput
  }

  /**
   * UserLocation findFirst
   */
  export type UserLocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * Filter, which UserLocation to fetch.
     */
    where?: UserLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLocations to fetch.
     */
    orderBy?: UserLocationOrderByWithRelationInput | UserLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLocations.
     */
    cursor?: UserLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLocations.
     */
    distinct?: UserLocationScalarFieldEnum | UserLocationScalarFieldEnum[]
  }

  /**
   * UserLocation findFirstOrThrow
   */
  export type UserLocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * Filter, which UserLocation to fetch.
     */
    where?: UserLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLocations to fetch.
     */
    orderBy?: UserLocationOrderByWithRelationInput | UserLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLocations.
     */
    cursor?: UserLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLocations.
     */
    distinct?: UserLocationScalarFieldEnum | UserLocationScalarFieldEnum[]
  }

  /**
   * UserLocation findMany
   */
  export type UserLocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * Filter, which UserLocations to fetch.
     */
    where?: UserLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLocations to fetch.
     */
    orderBy?: UserLocationOrderByWithRelationInput | UserLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserLocations.
     */
    cursor?: UserLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLocations.
     */
    skip?: number
    distinct?: UserLocationScalarFieldEnum | UserLocationScalarFieldEnum[]
  }

  /**
   * UserLocation create
   */
  export type UserLocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * The data needed to create a UserLocation.
     */
    data: XOR<UserLocationCreateInput, UserLocationUncheckedCreateInput>
  }

  /**
   * UserLocation createMany
   */
  export type UserLocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserLocations.
     */
    data: UserLocationCreateManyInput | UserLocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserLocation createManyAndReturn
   */
  export type UserLocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * The data used to create many UserLocations.
     */
    data: UserLocationCreateManyInput | UserLocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserLocation update
   */
  export type UserLocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * The data needed to update a UserLocation.
     */
    data: XOR<UserLocationUpdateInput, UserLocationUncheckedUpdateInput>
    /**
     * Choose, which UserLocation to update.
     */
    where: UserLocationWhereUniqueInput
  }

  /**
   * UserLocation updateMany
   */
  export type UserLocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserLocations.
     */
    data: XOR<UserLocationUpdateManyMutationInput, UserLocationUncheckedUpdateManyInput>
    /**
     * Filter which UserLocations to update
     */
    where?: UserLocationWhereInput
    /**
     * Limit how many UserLocations to update.
     */
    limit?: number
  }

  /**
   * UserLocation updateManyAndReturn
   */
  export type UserLocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * The data used to update UserLocations.
     */
    data: XOR<UserLocationUpdateManyMutationInput, UserLocationUncheckedUpdateManyInput>
    /**
     * Filter which UserLocations to update
     */
    where?: UserLocationWhereInput
    /**
     * Limit how many UserLocations to update.
     */
    limit?: number
  }

  /**
   * UserLocation upsert
   */
  export type UserLocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * The filter to search for the UserLocation to update in case it exists.
     */
    where: UserLocationWhereUniqueInput
    /**
     * In case the UserLocation found by the `where` argument doesn't exist, create a new UserLocation with this data.
     */
    create: XOR<UserLocationCreateInput, UserLocationUncheckedCreateInput>
    /**
     * In case the UserLocation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserLocationUpdateInput, UserLocationUncheckedUpdateInput>
  }

  /**
   * UserLocation delete
   */
  export type UserLocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * Filter which UserLocation to delete.
     */
    where: UserLocationWhereUniqueInput
  }

  /**
   * UserLocation deleteMany
   */
  export type UserLocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLocations to delete
     */
    where?: UserLocationWhereInput
    /**
     * Limit how many UserLocations to delete.
     */
    limit?: number
  }

  /**
   * UserLocation without action
   */
  export type UserLocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
  }


  /**
   * Model Report
   */

  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportMinAggregateOutputType = {
    id: string | null
    reportedId: string | null
    reporterId: string | null
    reason: string | null
    createdAt: Date | null
  }

  export type ReportMaxAggregateOutputType = {
    id: string | null
    reportedId: string | null
    reporterId: string | null
    reason: string | null
    createdAt: Date | null
  }

  export type ReportCountAggregateOutputType = {
    id: number
    reportedId: number
    reporterId: number
    reason: number
    createdAt: number
    _all: number
  }


  export type ReportMinAggregateInputType = {
    id?: true
    reportedId?: true
    reporterId?: true
    reason?: true
    createdAt?: true
  }

  export type ReportMaxAggregateInputType = {
    id?: true
    reportedId?: true
    reporterId?: true
    reason?: true
    createdAt?: true
  }

  export type ReportCountAggregateInputType = {
    id?: true
    reportedId?: true
    reporterId?: true
    reason?: true
    createdAt?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Report to aggregate.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type ReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithAggregationInput | ReportOrderByWithAggregationInput[]
    by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
    having?: ReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }

  export type ReportGroupByOutputType = {
    id: string
    reportedId: string
    reporterId: string
    reason: string
    createdAt: Date
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends ReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type ReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportedId?: boolean
    reporterId?: boolean
    reason?: boolean
    createdAt?: boolean
    reported?: boolean | UserDefaultArgs<ExtArgs>
    reporter?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportedId?: boolean
    reporterId?: boolean
    reason?: boolean
    createdAt?: boolean
    reported?: boolean | UserDefaultArgs<ExtArgs>
    reporter?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportedId?: boolean
    reporterId?: boolean
    reason?: boolean
    createdAt?: boolean
    reported?: boolean | UserDefaultArgs<ExtArgs>
    reporter?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectScalar = {
    id?: boolean
    reportedId?: boolean
    reporterId?: boolean
    reason?: boolean
    createdAt?: boolean
  }

  export type ReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reportedId" | "reporterId" | "reason" | "createdAt", ExtArgs["result"]["report"]>
  export type ReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reported?: boolean | UserDefaultArgs<ExtArgs>
    reporter?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reported?: boolean | UserDefaultArgs<ExtArgs>
    reporter?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reported?: boolean | UserDefaultArgs<ExtArgs>
    reporter?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Report"
    objects: {
      reported: Prisma.$UserPayload<ExtArgs>
      reporter: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reportedId: string
      reporterId: string
      reason: string
      createdAt: Date
    }, ExtArgs["result"]["report"]>
    composites: {}
  }

  type ReportGetPayload<S extends boolean | null | undefined | ReportDefaultArgs> = $Result.GetResult<Prisma.$ReportPayload, S>

  type ReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportCountAggregateInputType | true
    }

  export interface ReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Report'], meta: { name: 'Report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {ReportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportFindUniqueArgs>(args: SelectSubset<T, ReportFindUniqueArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportFindFirstArgs>(args?: SelectSubset<T, ReportFindFirstArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportFindManyArgs>(args?: SelectSubset<T, ReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Report.
     * @param {ReportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
     */
    create<T extends ReportCreateArgs>(args: SelectSubset<T, ReportCreateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {ReportCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportCreateManyArgs>(args?: SelectSubset<T, ReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reports and returns the data saved in the database.
     * @param {ReportCreateManyAndReturnArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReportCreateManyAndReturnArgs>(args?: SelectSubset<T, ReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Report.
     * @param {ReportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
     */
    delete<T extends ReportDeleteArgs>(args: SelectSubset<T, ReportDeleteArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Report.
     * @param {ReportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportUpdateArgs>(args: SelectSubset<T, ReportUpdateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {ReportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportDeleteManyArgs>(args?: SelectSubset<T, ReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportUpdateManyArgs>(args: SelectSubset<T, ReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports and returns the data updated in the database.
     * @param {ReportUpdateManyAndReturnArgs} args - Arguments to update many Reports.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReportUpdateManyAndReturnArgs>(args: SelectSubset<T, ReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Report.
     * @param {ReportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
     */
    upsert<T extends ReportUpsertArgs>(args: SelectSubset<T, ReportUpsertArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends ReportCountArgs>(
      args?: Subset<T, ReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportGroupByArgs} args - Group by arguments.
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
      T extends ReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportGroupByArgs['orderBy'] }
        : { orderBy?: ReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Report model
   */
  readonly fields: ReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reported<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reporter<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Report model
   */
  interface ReportFieldRefs {
    readonly id: FieldRef<"Report", 'String'>
    readonly reportedId: FieldRef<"Report", 'String'>
    readonly reporterId: FieldRef<"Report", 'String'>
    readonly reason: FieldRef<"Report", 'String'>
    readonly createdAt: FieldRef<"Report", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Report findUnique
   */
  export type ReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findUniqueOrThrow
   */
  export type ReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findFirst
   */
  export type ReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findFirstOrThrow
   */
  export type ReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findMany
   */
  export type ReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report create
   */
  export type ReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to create a Report.
     */
    data: XOR<ReportCreateInput, ReportUncheckedCreateInput>
  }

  /**
   * Report createMany
   */
  export type ReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Report createManyAndReturn
   */
  export type ReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report update
   */
  export type ReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to update a Report.
     */
    data: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
    /**
     * Choose, which Report to update.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report updateMany
   */
  export type ReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
  }

  /**
   * Report updateManyAndReturn
   */
  export type ReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report upsert
   */
  export type ReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The filter to search for the Report to update in case it exists.
     */
    where: ReportWhereUniqueInput
    /**
     * In case the Report found by the `where` argument doesn't exist, create a new Report with this data.
     */
    create: XOR<ReportCreateInput, ReportUncheckedCreateInput>
    /**
     * In case the Report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
  }

  /**
   * Report delete
   */
  export type ReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter which Report to delete.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report deleteMany
   */
  export type ReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to delete
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to delete.
     */
    limit?: number
  }

  /**
   * Report without action
   */
  export type ReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
  }


  /**
   * Model Match
   */

  export type AggregateMatch = {
    _count: MatchCountAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  export type MatchMinAggregateOutputType = {
    id: string | null
    userAId: string | null
    userBId: string | null
    mutual: boolean | null
    createdAt: Date | null
  }

  export type MatchMaxAggregateOutputType = {
    id: string | null
    userAId: string | null
    userBId: string | null
    mutual: boolean | null
    createdAt: Date | null
  }

  export type MatchCountAggregateOutputType = {
    id: number
    userAId: number
    userBId: number
    mutual: number
    createdAt: number
    _all: number
  }


  export type MatchMinAggregateInputType = {
    id?: true
    userAId?: true
    userBId?: true
    mutual?: true
    createdAt?: true
  }

  export type MatchMaxAggregateInputType = {
    id?: true
    userAId?: true
    userBId?: true
    mutual?: true
    createdAt?: true
  }

  export type MatchCountAggregateInputType = {
    id?: true
    userAId?: true
    userBId?: true
    mutual?: true
    createdAt?: true
    _all?: true
  }

  export type MatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Match to aggregate.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matches
    **/
    _count?: true | MatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchMaxAggregateInputType
  }

  export type GetMatchAggregateType<T extends MatchAggregateArgs> = {
        [P in keyof T & keyof AggregateMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatch[P]>
      : GetScalarType<T[P], AggregateMatch[P]>
  }




  export type MatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithAggregationInput | MatchOrderByWithAggregationInput[]
    by: MatchScalarFieldEnum[] | MatchScalarFieldEnum
    having?: MatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchCountAggregateInputType | true
    _min?: MatchMinAggregateInputType
    _max?: MatchMaxAggregateInputType
  }

  export type MatchGroupByOutputType = {
    id: string
    userAId: string
    userBId: string
    mutual: boolean
    createdAt: Date
    _count: MatchCountAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  type GetMatchGroupByPayload<T extends MatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchGroupByOutputType[P]>
            : GetScalarType<T[P], MatchGroupByOutputType[P]>
        }
      >
    >


  export type MatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userAId?: boolean
    userBId?: boolean
    mutual?: boolean
    createdAt?: boolean
    userA?: boolean | UserDefaultArgs<ExtArgs>
    userB?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userAId?: boolean
    userBId?: boolean
    mutual?: boolean
    createdAt?: boolean
    userA?: boolean | UserDefaultArgs<ExtArgs>
    userB?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userAId?: boolean
    userBId?: boolean
    mutual?: boolean
    createdAt?: boolean
    userA?: boolean | UserDefaultArgs<ExtArgs>
    userB?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectScalar = {
    id?: boolean
    userAId?: boolean
    userBId?: boolean
    mutual?: boolean
    createdAt?: boolean
  }

  export type MatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userAId" | "userBId" | "mutual" | "createdAt", ExtArgs["result"]["match"]>
  export type MatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userA?: boolean | UserDefaultArgs<ExtArgs>
    userB?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userA?: boolean | UserDefaultArgs<ExtArgs>
    userB?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userA?: boolean | UserDefaultArgs<ExtArgs>
    userB?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Match"
    objects: {
      userA: Prisma.$UserPayload<ExtArgs>
      userB: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userAId: string
      userBId: string
      mutual: boolean
      createdAt: Date
    }, ExtArgs["result"]["match"]>
    composites: {}
  }

  type MatchGetPayload<S extends boolean | null | undefined | MatchDefaultArgs> = $Result.GetResult<Prisma.$MatchPayload, S>

  type MatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchCountAggregateInputType | true
    }

  export interface MatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Match'], meta: { name: 'Match' } }
    /**
     * Find zero or one Match that matches the filter.
     * @param {MatchFindUniqueArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchFindUniqueArgs>(args: SelectSubset<T, MatchFindUniqueArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Match that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchFindUniqueOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchFindFirstArgs>(args?: SelectSubset<T, MatchFindFirstArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matches
     * const matches = await prisma.match.findMany()
     * 
     * // Get first 10 Matches
     * const matches = await prisma.match.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchWithIdOnly = await prisma.match.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchFindManyArgs>(args?: SelectSubset<T, MatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Match.
     * @param {MatchCreateArgs} args - Arguments to create a Match.
     * @example
     * // Create one Match
     * const Match = await prisma.match.create({
     *   data: {
     *     // ... data to create a Match
     *   }
     * })
     * 
     */
    create<T extends MatchCreateArgs>(args: SelectSubset<T, MatchCreateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Matches.
     * @param {MatchCreateManyArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchCreateManyArgs>(args?: SelectSubset<T, MatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Matches and returns the data saved in the database.
     * @param {MatchCreateManyAndReturnArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Match.
     * @param {MatchDeleteArgs} args - Arguments to delete one Match.
     * @example
     * // Delete one Match
     * const Match = await prisma.match.delete({
     *   where: {
     *     // ... filter to delete one Match
     *   }
     * })
     * 
     */
    delete<T extends MatchDeleteArgs>(args: SelectSubset<T, MatchDeleteArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Match.
     * @param {MatchUpdateArgs} args - Arguments to update one Match.
     * @example
     * // Update one Match
     * const match = await prisma.match.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchUpdateArgs>(args: SelectSubset<T, MatchUpdateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Matches.
     * @param {MatchDeleteManyArgs} args - Arguments to filter Matches to delete.
     * @example
     * // Delete a few Matches
     * const { count } = await prisma.match.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchDeleteManyArgs>(args?: SelectSubset<T, MatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchUpdateManyArgs>(args: SelectSubset<T, MatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches and returns the data updated in the database.
     * @param {MatchUpdateManyAndReturnArgs} args - Arguments to update many Matches.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MatchUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Match.
     * @param {MatchUpsertArgs} args - Arguments to update or create a Match.
     * @example
     * // Update or create a Match
     * const match = await prisma.match.upsert({
     *   create: {
     *     // ... data to create a Match
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Match we want to update
     *   }
     * })
     */
    upsert<T extends MatchUpsertArgs>(args: SelectSubset<T, MatchUpsertArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchCountArgs} args - Arguments to filter Matches to count.
     * @example
     * // Count the number of Matches
     * const count = await prisma.match.count({
     *   where: {
     *     // ... the filter for the Matches we want to count
     *   }
     * })
    **/
    count<T extends MatchCountArgs>(
      args?: Subset<T, MatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatchAggregateArgs>(args: Subset<T, MatchAggregateArgs>): Prisma.PrismaPromise<GetMatchAggregateType<T>>

    /**
     * Group by Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchGroupByArgs} args - Group by arguments.
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
      T extends MatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchGroupByArgs['orderBy'] }
        : { orderBy?: MatchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Match model
   */
  readonly fields: MatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Match.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userA<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userB<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Match model
   */
  interface MatchFieldRefs {
    readonly id: FieldRef<"Match", 'String'>
    readonly userAId: FieldRef<"Match", 'String'>
    readonly userBId: FieldRef<"Match", 'String'>
    readonly mutual: FieldRef<"Match", 'Boolean'>
    readonly createdAt: FieldRef<"Match", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Match findUnique
   */
  export type MatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findUniqueOrThrow
   */
  export type MatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findFirst
   */
  export type MatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findFirstOrThrow
   */
  export type MatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findMany
   */
  export type MatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Matches to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match create
   */
  export type MatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to create a Match.
     */
    data: XOR<MatchCreateInput, MatchUncheckedCreateInput>
  }

  /**
   * Match createMany
   */
  export type MatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Match createManyAndReturn
   */
  export type MatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match update
   */
  export type MatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to update a Match.
     */
    data: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
    /**
     * Choose, which Match to update.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match updateMany
   */
  export type MatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
  }

  /**
   * Match updateManyAndReturn
   */
  export type MatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match upsert
   */
  export type MatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The filter to search for the Match to update in case it exists.
     */
    where: MatchWhereUniqueInput
    /**
     * In case the Match found by the `where` argument doesn't exist, create a new Match with this data.
     */
    create: XOR<MatchCreateInput, MatchUncheckedCreateInput>
    /**
     * In case the Match was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
  }

  /**
   * Match delete
   */
  export type MatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter which Match to delete.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match deleteMany
   */
  export type MatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matches to delete
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to delete.
     */
    limit?: number
  }

  /**
   * Match without action
   */
  export type MatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
  }


  /**
   * Model View
   */

  export type AggregateView = {
    _count: ViewCountAggregateOutputType | null
    _min: ViewMinAggregateOutputType | null
    _max: ViewMaxAggregateOutputType | null
  }

  export type ViewMinAggregateOutputType = {
    id: string | null
    userAId: string | null
    userBId: string | null
    createdAt: Date | null
  }

  export type ViewMaxAggregateOutputType = {
    id: string | null
    userAId: string | null
    userBId: string | null
    createdAt: Date | null
  }

  export type ViewCountAggregateOutputType = {
    id: number
    userAId: number
    userBId: number
    createdAt: number
    _all: number
  }


  export type ViewMinAggregateInputType = {
    id?: true
    userAId?: true
    userBId?: true
    createdAt?: true
  }

  export type ViewMaxAggregateInputType = {
    id?: true
    userAId?: true
    userBId?: true
    createdAt?: true
  }

  export type ViewCountAggregateInputType = {
    id?: true
    userAId?: true
    userBId?: true
    createdAt?: true
    _all?: true
  }

  export type ViewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which View to aggregate.
     */
    where?: ViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: ViewOrderByWithRelationInput | ViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Views
    **/
    _count?: true | ViewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViewMaxAggregateInputType
  }

  export type GetViewAggregateType<T extends ViewAggregateArgs> = {
        [P in keyof T & keyof AggregateView]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateView[P]>
      : GetScalarType<T[P], AggregateView[P]>
  }




  export type ViewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewWhereInput
    orderBy?: ViewOrderByWithAggregationInput | ViewOrderByWithAggregationInput[]
    by: ViewScalarFieldEnum[] | ViewScalarFieldEnum
    having?: ViewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViewCountAggregateInputType | true
    _min?: ViewMinAggregateInputType
    _max?: ViewMaxAggregateInputType
  }

  export type ViewGroupByOutputType = {
    id: string
    userAId: string
    userBId: string
    createdAt: Date
    _count: ViewCountAggregateOutputType | null
    _min: ViewMinAggregateOutputType | null
    _max: ViewMaxAggregateOutputType | null
  }

  type GetViewGroupByPayload<T extends ViewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViewGroupByOutputType[P]>
            : GetScalarType<T[P], ViewGroupByOutputType[P]>
        }
      >
    >


  export type ViewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userAId?: boolean
    userBId?: boolean
    createdAt?: boolean
    userA?: boolean | UserDefaultArgs<ExtArgs>
    userB?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["view"]>

  export type ViewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userAId?: boolean
    userBId?: boolean
    createdAt?: boolean
    userA?: boolean | UserDefaultArgs<ExtArgs>
    userB?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["view"]>

  export type ViewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userAId?: boolean
    userBId?: boolean
    createdAt?: boolean
    userA?: boolean | UserDefaultArgs<ExtArgs>
    userB?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["view"]>

  export type ViewSelectScalar = {
    id?: boolean
    userAId?: boolean
    userBId?: boolean
    createdAt?: boolean
  }

  export type ViewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userAId" | "userBId" | "createdAt", ExtArgs["result"]["view"]>
  export type ViewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userA?: boolean | UserDefaultArgs<ExtArgs>
    userB?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ViewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userA?: boolean | UserDefaultArgs<ExtArgs>
    userB?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ViewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userA?: boolean | UserDefaultArgs<ExtArgs>
    userB?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ViewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "View"
    objects: {
      userA: Prisma.$UserPayload<ExtArgs>
      userB: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userAId: string
      userBId: string
      createdAt: Date
    }, ExtArgs["result"]["view"]>
    composites: {}
  }

  type ViewGetPayload<S extends boolean | null | undefined | ViewDefaultArgs> = $Result.GetResult<Prisma.$ViewPayload, S>

  type ViewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ViewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ViewCountAggregateInputType | true
    }

  export interface ViewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['View'], meta: { name: 'View' } }
    /**
     * Find zero or one View that matches the filter.
     * @param {ViewFindUniqueArgs} args - Arguments to find a View
     * @example
     * // Get one View
     * const view = await prisma.view.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ViewFindUniqueArgs>(args: SelectSubset<T, ViewFindUniqueArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one View that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ViewFindUniqueOrThrowArgs} args - Arguments to find a View
     * @example
     * // Get one View
     * const view = await prisma.view.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ViewFindUniqueOrThrowArgs>(args: SelectSubset<T, ViewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first View that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewFindFirstArgs} args - Arguments to find a View
     * @example
     * // Get one View
     * const view = await prisma.view.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ViewFindFirstArgs>(args?: SelectSubset<T, ViewFindFirstArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first View that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewFindFirstOrThrowArgs} args - Arguments to find a View
     * @example
     * // Get one View
     * const view = await prisma.view.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ViewFindFirstOrThrowArgs>(args?: SelectSubset<T, ViewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Views that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Views
     * const views = await prisma.view.findMany()
     * 
     * // Get first 10 Views
     * const views = await prisma.view.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const viewWithIdOnly = await prisma.view.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ViewFindManyArgs>(args?: SelectSubset<T, ViewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a View.
     * @param {ViewCreateArgs} args - Arguments to create a View.
     * @example
     * // Create one View
     * const View = await prisma.view.create({
     *   data: {
     *     // ... data to create a View
     *   }
     * })
     * 
     */
    create<T extends ViewCreateArgs>(args: SelectSubset<T, ViewCreateArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Views.
     * @param {ViewCreateManyArgs} args - Arguments to create many Views.
     * @example
     * // Create many Views
     * const view = await prisma.view.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ViewCreateManyArgs>(args?: SelectSubset<T, ViewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Views and returns the data saved in the database.
     * @param {ViewCreateManyAndReturnArgs} args - Arguments to create many Views.
     * @example
     * // Create many Views
     * const view = await prisma.view.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Views and only return the `id`
     * const viewWithIdOnly = await prisma.view.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ViewCreateManyAndReturnArgs>(args?: SelectSubset<T, ViewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a View.
     * @param {ViewDeleteArgs} args - Arguments to delete one View.
     * @example
     * // Delete one View
     * const View = await prisma.view.delete({
     *   where: {
     *     // ... filter to delete one View
     *   }
     * })
     * 
     */
    delete<T extends ViewDeleteArgs>(args: SelectSubset<T, ViewDeleteArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one View.
     * @param {ViewUpdateArgs} args - Arguments to update one View.
     * @example
     * // Update one View
     * const view = await prisma.view.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ViewUpdateArgs>(args: SelectSubset<T, ViewUpdateArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Views.
     * @param {ViewDeleteManyArgs} args - Arguments to filter Views to delete.
     * @example
     * // Delete a few Views
     * const { count } = await prisma.view.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ViewDeleteManyArgs>(args?: SelectSubset<T, ViewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Views
     * const view = await prisma.view.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ViewUpdateManyArgs>(args: SelectSubset<T, ViewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Views and returns the data updated in the database.
     * @param {ViewUpdateManyAndReturnArgs} args - Arguments to update many Views.
     * @example
     * // Update many Views
     * const view = await prisma.view.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Views and only return the `id`
     * const viewWithIdOnly = await prisma.view.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ViewUpdateManyAndReturnArgs>(args: SelectSubset<T, ViewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one View.
     * @param {ViewUpsertArgs} args - Arguments to update or create a View.
     * @example
     * // Update or create a View
     * const view = await prisma.view.upsert({
     *   create: {
     *     // ... data to create a View
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the View we want to update
     *   }
     * })
     */
    upsert<T extends ViewUpsertArgs>(args: SelectSubset<T, ViewUpsertArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewCountArgs} args - Arguments to filter Views to count.
     * @example
     * // Count the number of Views
     * const count = await prisma.view.count({
     *   where: {
     *     // ... the filter for the Views we want to count
     *   }
     * })
    **/
    count<T extends ViewCountArgs>(
      args?: Subset<T, ViewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a View.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ViewAggregateArgs>(args: Subset<T, ViewAggregateArgs>): Prisma.PrismaPromise<GetViewAggregateType<T>>

    /**
     * Group by View.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewGroupByArgs} args - Group by arguments.
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
      T extends ViewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ViewGroupByArgs['orderBy'] }
        : { orderBy?: ViewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ViewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the View model
   */
  readonly fields: ViewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for View.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ViewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userA<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userB<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the View model
   */
  interface ViewFieldRefs {
    readonly id: FieldRef<"View", 'String'>
    readonly userAId: FieldRef<"View", 'String'>
    readonly userBId: FieldRef<"View", 'String'>
    readonly createdAt: FieldRef<"View", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * View findUnique
   */
  export type ViewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * Filter, which View to fetch.
     */
    where: ViewWhereUniqueInput
  }

  /**
   * View findUniqueOrThrow
   */
  export type ViewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * Filter, which View to fetch.
     */
    where: ViewWhereUniqueInput
  }

  /**
   * View findFirst
   */
  export type ViewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * Filter, which View to fetch.
     */
    where?: ViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: ViewOrderByWithRelationInput | ViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Views.
     */
    cursor?: ViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Views.
     */
    distinct?: ViewScalarFieldEnum | ViewScalarFieldEnum[]
  }

  /**
   * View findFirstOrThrow
   */
  export type ViewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * Filter, which View to fetch.
     */
    where?: ViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: ViewOrderByWithRelationInput | ViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Views.
     */
    cursor?: ViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Views.
     */
    distinct?: ViewScalarFieldEnum | ViewScalarFieldEnum[]
  }

  /**
   * View findMany
   */
  export type ViewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * Filter, which Views to fetch.
     */
    where?: ViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: ViewOrderByWithRelationInput | ViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Views.
     */
    cursor?: ViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     */
    skip?: number
    distinct?: ViewScalarFieldEnum | ViewScalarFieldEnum[]
  }

  /**
   * View create
   */
  export type ViewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * The data needed to create a View.
     */
    data: XOR<ViewCreateInput, ViewUncheckedCreateInput>
  }

  /**
   * View createMany
   */
  export type ViewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Views.
     */
    data: ViewCreateManyInput | ViewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * View createManyAndReturn
   */
  export type ViewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * The data used to create many Views.
     */
    data: ViewCreateManyInput | ViewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * View update
   */
  export type ViewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * The data needed to update a View.
     */
    data: XOR<ViewUpdateInput, ViewUncheckedUpdateInput>
    /**
     * Choose, which View to update.
     */
    where: ViewWhereUniqueInput
  }

  /**
   * View updateMany
   */
  export type ViewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Views.
     */
    data: XOR<ViewUpdateManyMutationInput, ViewUncheckedUpdateManyInput>
    /**
     * Filter which Views to update
     */
    where?: ViewWhereInput
    /**
     * Limit how many Views to update.
     */
    limit?: number
  }

  /**
   * View updateManyAndReturn
   */
  export type ViewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * The data used to update Views.
     */
    data: XOR<ViewUpdateManyMutationInput, ViewUncheckedUpdateManyInput>
    /**
     * Filter which Views to update
     */
    where?: ViewWhereInput
    /**
     * Limit how many Views to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * View upsert
   */
  export type ViewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * The filter to search for the View to update in case it exists.
     */
    where: ViewWhereUniqueInput
    /**
     * In case the View found by the `where` argument doesn't exist, create a new View with this data.
     */
    create: XOR<ViewCreateInput, ViewUncheckedCreateInput>
    /**
     * In case the View was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ViewUpdateInput, ViewUncheckedUpdateInput>
  }

  /**
   * View delete
   */
  export type ViewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * Filter which View to delete.
     */
    where: ViewWhereUniqueInput
  }

  /**
   * View deleteMany
   */
  export type ViewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Views to delete
     */
    where?: ViewWhereInput
    /**
     * Limit how many Views to delete.
     */
    limit?: number
  }

  /**
   * View without action
   */
  export type ViewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    avatarUrl: 'avatarUrl',
    location: 'location',
    personalityTags: 'personalityTags',
    workingStyle: 'workingStyle',
    collaborationPref: 'collaborationPref',
    currentRole: 'currentRole',
    yearsExperience: 'yearsExperience',
    domainExpertise: 'domainExpertise',
    skills: 'skills',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const StartupinfoScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    startupStage: 'startupStage',
    startupGoals: 'startupGoals',
    startupCommitment: 'startupCommitment',
    lookingFor: 'lookingFor'
  };

  export type StartupinfoScalarFieldEnum = (typeof StartupinfoScalarFieldEnum)[keyof typeof StartupinfoScalarFieldEnum]


  export const ContactInfoScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    email: 'email',
    twitterUrl: 'twitterUrl',
    linkedinUrl: 'linkedinUrl',
    scheduleUrl: 'scheduleUrl'
  };

  export type ContactInfoScalarFieldEnum = (typeof ContactInfoScalarFieldEnum)[keyof typeof ContactInfoScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    link: 'link',
    userId: 'userId'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const UserLocationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    latitude: 'latitude',
    longitude: 'longitude',
    geohash: 'geohash'
  };

  export type UserLocationScalarFieldEnum = (typeof UserLocationScalarFieldEnum)[keyof typeof UserLocationScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    id: 'id',
    reportedId: 'reportedId',
    reporterId: 'reporterId',
    reason: 'reason',
    createdAt: 'createdAt'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const MatchScalarFieldEnum: {
    id: 'id',
    userAId: 'userAId',
    userBId: 'userBId',
    mutual: 'mutual',
    createdAt: 'createdAt'
  };

  export type MatchScalarFieldEnum = (typeof MatchScalarFieldEnum)[keyof typeof MatchScalarFieldEnum]


  export const ViewScalarFieldEnum: {
    id: 'id',
    userAId: 'userAId',
    userBId: 'userBId',
    createdAt: 'createdAt'
  };

  export type ViewScalarFieldEnum = (typeof ViewScalarFieldEnum)[keyof typeof ViewScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'WorkingStyle'
   */
  export type EnumWorkingStyleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkingStyle'>
    


  /**
   * Reference to a field of type 'WorkingStyle[]'
   */
  export type ListEnumWorkingStyleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkingStyle[]'>
    


  /**
   * Reference to a field of type 'CollaborationPref'
   */
  export type EnumCollaborationPrefFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CollaborationPref'>
    


  /**
   * Reference to a field of type 'CollaborationPref[]'
   */
  export type ListEnumCollaborationPrefFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CollaborationPref[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'StartupStage'
   */
  export type EnumStartupStageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StartupStage'>
    


  /**
   * Reference to a field of type 'StartupStage[]'
   */
  export type ListEnumStartupStageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StartupStage[]'>
    


  /**
   * Reference to a field of type 'CommitmentLevel'
   */
  export type EnumCommitmentLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CommitmentLevel'>
    


  /**
   * Reference to a field of type 'CommitmentLevel[]'
   */
  export type ListEnumCommitmentLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CommitmentLevel[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    description?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    location?: StringFilter<"User"> | string
    personalityTags?: StringNullableListFilter<"User">
    workingStyle?: EnumWorkingStyleFilter<"User"> | $Enums.WorkingStyle
    collaborationPref?: EnumCollaborationPrefFilter<"User"> | $Enums.CollaborationPref
    currentRole?: StringFilter<"User"> | string
    yearsExperience?: IntFilter<"User"> | number
    domainExpertise?: StringNullableListFilter<"User">
    skills?: StringNullableListFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    pastProjects?: ProjectListRelationFilter
    startupInfo?: XOR<StartupinfoNullableScalarRelationFilter, StartupinfoWhereInput> | null
    contactInfo?: XOR<ContactInfoNullableScalarRelationFilter, ContactInfoWhereInput> | null
    reportsFiled?: ReportListRelationFilter
    reportsReceived?: ReportListRelationFilter
    matchesInitiated?: MatchListRelationFilter
    matchesReceived?: MatchListRelationFilter
    viewsGiven?: ViewListRelationFilter
    viewsReceived?: ViewListRelationFilter
    Admin?: AdminListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    location?: SortOrder
    personalityTags?: SortOrder
    workingStyle?: SortOrder
    collaborationPref?: SortOrder
    currentRole?: SortOrder
    yearsExperience?: SortOrder
    domainExpertise?: SortOrder
    skills?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pastProjects?: ProjectOrderByRelationAggregateInput
    startupInfo?: StartupinfoOrderByWithRelationInput
    contactInfo?: ContactInfoOrderByWithRelationInput
    reportsFiled?: ReportOrderByRelationAggregateInput
    reportsReceived?: ReportOrderByRelationAggregateInput
    matchesInitiated?: MatchOrderByRelationAggregateInput
    matchesReceived?: MatchOrderByRelationAggregateInput
    viewsGiven?: ViewOrderByRelationAggregateInput
    viewsReceived?: ViewOrderByRelationAggregateInput
    Admin?: AdminOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    description?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    location?: StringFilter<"User"> | string
    personalityTags?: StringNullableListFilter<"User">
    workingStyle?: EnumWorkingStyleFilter<"User"> | $Enums.WorkingStyle
    collaborationPref?: EnumCollaborationPrefFilter<"User"> | $Enums.CollaborationPref
    currentRole?: StringFilter<"User"> | string
    yearsExperience?: IntFilter<"User"> | number
    domainExpertise?: StringNullableListFilter<"User">
    skills?: StringNullableListFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    pastProjects?: ProjectListRelationFilter
    startupInfo?: XOR<StartupinfoNullableScalarRelationFilter, StartupinfoWhereInput> | null
    contactInfo?: XOR<ContactInfoNullableScalarRelationFilter, ContactInfoWhereInput> | null
    reportsFiled?: ReportListRelationFilter
    reportsReceived?: ReportListRelationFilter
    matchesInitiated?: MatchListRelationFilter
    matchesReceived?: MatchListRelationFilter
    viewsGiven?: ViewListRelationFilter
    viewsReceived?: ViewListRelationFilter
    Admin?: AdminListRelationFilter
  }, "id" | "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    location?: SortOrder
    personalityTags?: SortOrder
    workingStyle?: SortOrder
    collaborationPref?: SortOrder
    currentRole?: SortOrder
    yearsExperience?: SortOrder
    domainExpertise?: SortOrder
    skills?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    description?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    location?: StringWithAggregatesFilter<"User"> | string
    personalityTags?: StringNullableListFilter<"User">
    workingStyle?: EnumWorkingStyleWithAggregatesFilter<"User"> | $Enums.WorkingStyle
    collaborationPref?: EnumCollaborationPrefWithAggregatesFilter<"User"> | $Enums.CollaborationPref
    currentRole?: StringWithAggregatesFilter<"User"> | string
    yearsExperience?: IntWithAggregatesFilter<"User"> | number
    domainExpertise?: StringNullableListFilter<"User">
    skills?: StringNullableListFilter<"User">
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    userId?: StringFilter<"Admin"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    userId?: StringFilter<"Admin"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    userId?: StringWithAggregatesFilter<"Admin"> | string
  }

  export type StartupinfoWhereInput = {
    AND?: StartupinfoWhereInput | StartupinfoWhereInput[]
    OR?: StartupinfoWhereInput[]
    NOT?: StartupinfoWhereInput | StartupinfoWhereInput[]
    id?: StringFilter<"Startupinfo"> | string
    userId?: StringFilter<"Startupinfo"> | string
    startupStage?: EnumStartupStageFilter<"Startupinfo"> | $Enums.StartupStage
    startupGoals?: StringFilter<"Startupinfo"> | string
    startupCommitment?: EnumCommitmentLevelFilter<"Startupinfo"> | $Enums.CommitmentLevel
    lookingFor?: StringNullableListFilter<"Startupinfo">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StartupinfoOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    startupStage?: SortOrder
    startupGoals?: SortOrder
    startupCommitment?: SortOrder
    lookingFor?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type StartupinfoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: StartupinfoWhereInput | StartupinfoWhereInput[]
    OR?: StartupinfoWhereInput[]
    NOT?: StartupinfoWhereInput | StartupinfoWhereInput[]
    startupStage?: EnumStartupStageFilter<"Startupinfo"> | $Enums.StartupStage
    startupGoals?: StringFilter<"Startupinfo"> | string
    startupCommitment?: EnumCommitmentLevelFilter<"Startupinfo"> | $Enums.CommitmentLevel
    lookingFor?: StringNullableListFilter<"Startupinfo">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type StartupinfoOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    startupStage?: SortOrder
    startupGoals?: SortOrder
    startupCommitment?: SortOrder
    lookingFor?: SortOrder
    _count?: StartupinfoCountOrderByAggregateInput
    _max?: StartupinfoMaxOrderByAggregateInput
    _min?: StartupinfoMinOrderByAggregateInput
  }

  export type StartupinfoScalarWhereWithAggregatesInput = {
    AND?: StartupinfoScalarWhereWithAggregatesInput | StartupinfoScalarWhereWithAggregatesInput[]
    OR?: StartupinfoScalarWhereWithAggregatesInput[]
    NOT?: StartupinfoScalarWhereWithAggregatesInput | StartupinfoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Startupinfo"> | string
    userId?: StringWithAggregatesFilter<"Startupinfo"> | string
    startupStage?: EnumStartupStageWithAggregatesFilter<"Startupinfo"> | $Enums.StartupStage
    startupGoals?: StringWithAggregatesFilter<"Startupinfo"> | string
    startupCommitment?: EnumCommitmentLevelWithAggregatesFilter<"Startupinfo"> | $Enums.CommitmentLevel
    lookingFor?: StringNullableListFilter<"Startupinfo">
  }

  export type ContactInfoWhereInput = {
    AND?: ContactInfoWhereInput | ContactInfoWhereInput[]
    OR?: ContactInfoWhereInput[]
    NOT?: ContactInfoWhereInput | ContactInfoWhereInput[]
    id?: StringFilter<"ContactInfo"> | string
    userId?: StringFilter<"ContactInfo"> | string
    email?: StringNullableFilter<"ContactInfo"> | string | null
    twitterUrl?: StringNullableFilter<"ContactInfo"> | string | null
    linkedinUrl?: StringNullableFilter<"ContactInfo"> | string | null
    scheduleUrl?: StringNullableFilter<"ContactInfo"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ContactInfoOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    email?: SortOrderInput | SortOrder
    twitterUrl?: SortOrderInput | SortOrder
    linkedinUrl?: SortOrderInput | SortOrder
    scheduleUrl?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ContactInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    email?: string
    twitterUrl?: string
    linkedinUrl?: string
    scheduleUrl?: string
    AND?: ContactInfoWhereInput | ContactInfoWhereInput[]
    OR?: ContactInfoWhereInput[]
    NOT?: ContactInfoWhereInput | ContactInfoWhereInput[]
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId" | "email" | "twitterUrl" | "linkedinUrl" | "scheduleUrl">

  export type ContactInfoOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    email?: SortOrderInput | SortOrder
    twitterUrl?: SortOrderInput | SortOrder
    linkedinUrl?: SortOrderInput | SortOrder
    scheduleUrl?: SortOrderInput | SortOrder
    _count?: ContactInfoCountOrderByAggregateInput
    _max?: ContactInfoMaxOrderByAggregateInput
    _min?: ContactInfoMinOrderByAggregateInput
  }

  export type ContactInfoScalarWhereWithAggregatesInput = {
    AND?: ContactInfoScalarWhereWithAggregatesInput | ContactInfoScalarWhereWithAggregatesInput[]
    OR?: ContactInfoScalarWhereWithAggregatesInput[]
    NOT?: ContactInfoScalarWhereWithAggregatesInput | ContactInfoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactInfo"> | string
    userId?: StringWithAggregatesFilter<"ContactInfo"> | string
    email?: StringNullableWithAggregatesFilter<"ContactInfo"> | string | null
    twitterUrl?: StringNullableWithAggregatesFilter<"ContactInfo"> | string | null
    linkedinUrl?: StringNullableWithAggregatesFilter<"ContactInfo"> | string | null
    scheduleUrl?: StringNullableWithAggregatesFilter<"ContactInfo"> | string | null
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    link?: StringNullableFilter<"Project"> | string | null
    userId?: StringFilter<"Project"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    link?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    link?: StringNullableFilter<"Project"> | string | null
    userId?: StringFilter<"Project"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    link?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    description?: StringWithAggregatesFilter<"Project"> | string
    link?: StringNullableWithAggregatesFilter<"Project"> | string | null
    userId?: StringWithAggregatesFilter<"Project"> | string
  }

  export type UserLocationWhereInput = {
    AND?: UserLocationWhereInput | UserLocationWhereInput[]
    OR?: UserLocationWhereInput[]
    NOT?: UserLocationWhereInput | UserLocationWhereInput[]
    id?: StringFilter<"UserLocation"> | string
    userId?: StringFilter<"UserLocation"> | string
    latitude?: FloatFilter<"UserLocation"> | number
    longitude?: FloatFilter<"UserLocation"> | number
    geohash?: StringFilter<"UserLocation"> | string
  }

  export type UserLocationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    geohash?: SortOrder
  }

  export type UserLocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserLocationWhereInput | UserLocationWhereInput[]
    OR?: UserLocationWhereInput[]
    NOT?: UserLocationWhereInput | UserLocationWhereInput[]
    latitude?: FloatFilter<"UserLocation"> | number
    longitude?: FloatFilter<"UserLocation"> | number
    geohash?: StringFilter<"UserLocation"> | string
  }, "id" | "userId">

  export type UserLocationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    geohash?: SortOrder
    _count?: UserLocationCountOrderByAggregateInput
    _avg?: UserLocationAvgOrderByAggregateInput
    _max?: UserLocationMaxOrderByAggregateInput
    _min?: UserLocationMinOrderByAggregateInput
    _sum?: UserLocationSumOrderByAggregateInput
  }

  export type UserLocationScalarWhereWithAggregatesInput = {
    AND?: UserLocationScalarWhereWithAggregatesInput | UserLocationScalarWhereWithAggregatesInput[]
    OR?: UserLocationScalarWhereWithAggregatesInput[]
    NOT?: UserLocationScalarWhereWithAggregatesInput | UserLocationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserLocation"> | string
    userId?: StringWithAggregatesFilter<"UserLocation"> | string
    latitude?: FloatWithAggregatesFilter<"UserLocation"> | number
    longitude?: FloatWithAggregatesFilter<"UserLocation"> | number
    geohash?: StringWithAggregatesFilter<"UserLocation"> | string
  }

  export type ReportWhereInput = {
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    id?: StringFilter<"Report"> | string
    reportedId?: StringFilter<"Report"> | string
    reporterId?: StringFilter<"Report"> | string
    reason?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    reported?: XOR<UserScalarRelationFilter, UserWhereInput>
    reporter?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReportOrderByWithRelationInput = {
    id?: SortOrder
    reportedId?: SortOrder
    reporterId?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    reported?: UserOrderByWithRelationInput
    reporter?: UserOrderByWithRelationInput
  }

  export type ReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    reportedId?: StringFilter<"Report"> | string
    reporterId?: StringFilter<"Report"> | string
    reason?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    reported?: XOR<UserScalarRelationFilter, UserWhereInput>
    reporter?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ReportOrderByWithAggregationInput = {
    id?: SortOrder
    reportedId?: SortOrder
    reporterId?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    _count?: ReportCountOrderByAggregateInput
    _max?: ReportMaxOrderByAggregateInput
    _min?: ReportMinOrderByAggregateInput
  }

  export type ReportScalarWhereWithAggregatesInput = {
    AND?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    OR?: ReportScalarWhereWithAggregatesInput[]
    NOT?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Report"> | string
    reportedId?: StringWithAggregatesFilter<"Report"> | string
    reporterId?: StringWithAggregatesFilter<"Report"> | string
    reason?: StringWithAggregatesFilter<"Report"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
  }

  export type MatchWhereInput = {
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    id?: StringFilter<"Match"> | string
    userAId?: StringFilter<"Match"> | string
    userBId?: StringFilter<"Match"> | string
    mutual?: BoolFilter<"Match"> | boolean
    createdAt?: DateTimeFilter<"Match"> | Date | string
    userA?: XOR<UserScalarRelationFilter, UserWhereInput>
    userB?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MatchOrderByWithRelationInput = {
    id?: SortOrder
    userAId?: SortOrder
    userBId?: SortOrder
    mutual?: SortOrder
    createdAt?: SortOrder
    userA?: UserOrderByWithRelationInput
    userB?: UserOrderByWithRelationInput
  }

  export type MatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userAId_userBId?: MatchUserAIdUserBIdCompoundUniqueInput
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    userAId?: StringFilter<"Match"> | string
    userBId?: StringFilter<"Match"> | string
    mutual?: BoolFilter<"Match"> | boolean
    createdAt?: DateTimeFilter<"Match"> | Date | string
    userA?: XOR<UserScalarRelationFilter, UserWhereInput>
    userB?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userAId_userBId">

  export type MatchOrderByWithAggregationInput = {
    id?: SortOrder
    userAId?: SortOrder
    userBId?: SortOrder
    mutual?: SortOrder
    createdAt?: SortOrder
    _count?: MatchCountOrderByAggregateInput
    _max?: MatchMaxOrderByAggregateInput
    _min?: MatchMinOrderByAggregateInput
  }

  export type MatchScalarWhereWithAggregatesInput = {
    AND?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    OR?: MatchScalarWhereWithAggregatesInput[]
    NOT?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Match"> | string
    userAId?: StringWithAggregatesFilter<"Match"> | string
    userBId?: StringWithAggregatesFilter<"Match"> | string
    mutual?: BoolWithAggregatesFilter<"Match"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Match"> | Date | string
  }

  export type ViewWhereInput = {
    AND?: ViewWhereInput | ViewWhereInput[]
    OR?: ViewWhereInput[]
    NOT?: ViewWhereInput | ViewWhereInput[]
    id?: StringFilter<"View"> | string
    userAId?: StringFilter<"View"> | string
    userBId?: StringFilter<"View"> | string
    createdAt?: DateTimeFilter<"View"> | Date | string
    userA?: XOR<UserScalarRelationFilter, UserWhereInput>
    userB?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ViewOrderByWithRelationInput = {
    id?: SortOrder
    userAId?: SortOrder
    userBId?: SortOrder
    createdAt?: SortOrder
    userA?: UserOrderByWithRelationInput
    userB?: UserOrderByWithRelationInput
  }

  export type ViewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userAId_userBId?: ViewUserAIdUserBIdCompoundUniqueInput
    AND?: ViewWhereInput | ViewWhereInput[]
    OR?: ViewWhereInput[]
    NOT?: ViewWhereInput | ViewWhereInput[]
    userAId?: StringFilter<"View"> | string
    userBId?: StringFilter<"View"> | string
    createdAt?: DateTimeFilter<"View"> | Date | string
    userA?: XOR<UserScalarRelationFilter, UserWhereInput>
    userB?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userAId_userBId">

  export type ViewOrderByWithAggregationInput = {
    id?: SortOrder
    userAId?: SortOrder
    userBId?: SortOrder
    createdAt?: SortOrder
    _count?: ViewCountOrderByAggregateInput
    _max?: ViewMaxOrderByAggregateInput
    _min?: ViewMinOrderByAggregateInput
  }

  export type ViewScalarWhereWithAggregatesInput = {
    AND?: ViewScalarWhereWithAggregatesInput | ViewScalarWhereWithAggregatesInput[]
    OR?: ViewScalarWhereWithAggregatesInput[]
    NOT?: ViewScalarWhereWithAggregatesInput | ViewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"View"> | string
    userAId?: StringWithAggregatesFilter<"View"> | string
    userBId?: StringWithAggregatesFilter<"View"> | string
    createdAt?: DateTimeWithAggregatesFilter<"View"> | Date | string
  }

  export type UserCreateInput = {
    id: string
    name: string
    description?: string | null
    avatarUrl?: string | null
    location: string
    personalityTags?: UserCreatepersonalityTagsInput | string[]
    workingStyle: $Enums.WorkingStyle
    collaborationPref: $Enums.CollaborationPref
    currentRole: string
    yearsExperience: number
    domainExpertise?: UserCreatedomainExpertiseInput | string[]
    skills?: UserCreateskillsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    pastProjects?: ProjectCreateNestedManyWithoutUserInput
    startupInfo?: StartupinfoCreateNestedOneWithoutUserInput
    contactInfo?: ContactInfoCreateNestedOneWithoutUserInput
    reportsFiled?: ReportCreateNestedManyWithoutReporterInput
    reportsReceived?: ReportCreateNestedManyWithoutReportedInput
    matchesInitiated?: MatchCreateNestedManyWithoutUserAInput
    matchesReceived?: MatchCreateNestedManyWithoutUserBInput
    viewsGiven?: ViewCreateNestedManyWithoutUserAInput
    viewsReceived?: ViewCreateNestedManyWithoutUserBInput
    Admin?: AdminCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    name: string
    description?: string | null
    avatarUrl?: string | null
    location: string
    personalityTags?: UserCreatepersonalityTagsInput | string[]
    workingStyle: $Enums.WorkingStyle
    collaborationPref: $Enums.CollaborationPref
    currentRole: string
    yearsExperience: number
    domainExpertise?: UserCreatedomainExpertiseInput | string[]
    skills?: UserCreateskillsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    pastProjects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    startupInfo?: StartupinfoUncheckedCreateNestedOneWithoutUserInput
    contactInfo?: ContactInfoUncheckedCreateNestedOneWithoutUserInput
    reportsFiled?: ReportUncheckedCreateNestedManyWithoutReporterInput
    reportsReceived?: ReportUncheckedCreateNestedManyWithoutReportedInput
    matchesInitiated?: MatchUncheckedCreateNestedManyWithoutUserAInput
    matchesReceived?: MatchUncheckedCreateNestedManyWithoutUserBInput
    viewsGiven?: ViewUncheckedCreateNestedManyWithoutUserAInput
    viewsReceived?: ViewUncheckedCreateNestedManyWithoutUserBInput
    Admin?: AdminUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    personalityTags?: UserUpdatepersonalityTagsInput | string[]
    workingStyle?: EnumWorkingStyleFieldUpdateOperationsInput | $Enums.WorkingStyle
    collaborationPref?: EnumCollaborationPrefFieldUpdateOperationsInput | $Enums.CollaborationPref
    currentRole?: StringFieldUpdateOperationsInput | string
    yearsExperience?: IntFieldUpdateOperationsInput | number
    domainExpertise?: UserUpdatedomainExpertiseInput | string[]
    skills?: UserUpdateskillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pastProjects?: ProjectUpdateManyWithoutUserNestedInput
    startupInfo?: StartupinfoUpdateOneWithoutUserNestedInput
    contactInfo?: ContactInfoUpdateOneWithoutUserNestedInput
    reportsFiled?: ReportUpdateManyWithoutReporterNestedInput
    reportsReceived?: ReportUpdateManyWithoutReportedNestedInput
    matchesInitiated?: MatchUpdateManyWithoutUserANestedInput
    matchesReceived?: MatchUpdateManyWithoutUserBNestedInput
    viewsGiven?: ViewUpdateManyWithoutUserANestedInput
    viewsReceived?: ViewUpdateManyWithoutUserBNestedInput
    Admin?: AdminUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    personalityTags?: UserUpdatepersonalityTagsInput | string[]
    workingStyle?: EnumWorkingStyleFieldUpdateOperationsInput | $Enums.WorkingStyle
    collaborationPref?: EnumCollaborationPrefFieldUpdateOperationsInput | $Enums.CollaborationPref
    currentRole?: StringFieldUpdateOperationsInput | string
    yearsExperience?: IntFieldUpdateOperationsInput | number
    domainExpertise?: UserUpdatedomainExpertiseInput | string[]
    skills?: UserUpdateskillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pastProjects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    startupInfo?: StartupinfoUncheckedUpdateOneWithoutUserNestedInput
    contactInfo?: ContactInfoUncheckedUpdateOneWithoutUserNestedInput
    reportsFiled?: ReportUncheckedUpdateManyWithoutReporterNestedInput
    reportsReceived?: ReportUncheckedUpdateManyWithoutReportedNestedInput
    matchesInitiated?: MatchUncheckedUpdateManyWithoutUserANestedInput
    matchesReceived?: MatchUncheckedUpdateManyWithoutUserBNestedInput
    viewsGiven?: ViewUncheckedUpdateManyWithoutUserANestedInput
    viewsReceived?: ViewUncheckedUpdateManyWithoutUserBNestedInput
    Admin?: AdminUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    name: string
    description?: string | null
    avatarUrl?: string | null
    location: string
    personalityTags?: UserCreatepersonalityTagsInput | string[]
    workingStyle: $Enums.WorkingStyle
    collaborationPref: $Enums.CollaborationPref
    currentRole: string
    yearsExperience: number
    domainExpertise?: UserCreatedomainExpertiseInput | string[]
    skills?: UserCreateskillsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    personalityTags?: UserUpdatepersonalityTagsInput | string[]
    workingStyle?: EnumWorkingStyleFieldUpdateOperationsInput | $Enums.WorkingStyle
    collaborationPref?: EnumCollaborationPrefFieldUpdateOperationsInput | $Enums.CollaborationPref
    currentRole?: StringFieldUpdateOperationsInput | string
    yearsExperience?: IntFieldUpdateOperationsInput | number
    domainExpertise?: UserUpdatedomainExpertiseInput | string[]
    skills?: UserUpdateskillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    personalityTags?: UserUpdatepersonalityTagsInput | string[]
    workingStyle?: EnumWorkingStyleFieldUpdateOperationsInput | $Enums.WorkingStyle
    collaborationPref?: EnumCollaborationPrefFieldUpdateOperationsInput | $Enums.CollaborationPref
    currentRole?: StringFieldUpdateOperationsInput | string
    yearsExperience?: IntFieldUpdateOperationsInput | number
    domainExpertise?: UserUpdatedomainExpertiseInput | string[]
    skills?: UserUpdateskillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    userId: string
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateManyInput = {
    id?: string
    userId: string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StartupinfoCreateInput = {
    id?: string
    startupStage: $Enums.StartupStage
    startupGoals: string
    startupCommitment: $Enums.CommitmentLevel
    lookingFor?: StartupinfoCreatelookingForInput | string[]
    user: UserCreateNestedOneWithoutStartupInfoInput
  }

  export type StartupinfoUncheckedCreateInput = {
    id?: string
    userId: string
    startupStage: $Enums.StartupStage
    startupGoals: string
    startupCommitment: $Enums.CommitmentLevel
    lookingFor?: StartupinfoCreatelookingForInput | string[]
  }

  export type StartupinfoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startupStage?: EnumStartupStageFieldUpdateOperationsInput | $Enums.StartupStage
    startupGoals?: StringFieldUpdateOperationsInput | string
    startupCommitment?: EnumCommitmentLevelFieldUpdateOperationsInput | $Enums.CommitmentLevel
    lookingFor?: StartupinfoUpdatelookingForInput | string[]
    user?: UserUpdateOneRequiredWithoutStartupInfoNestedInput
  }

  export type StartupinfoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startupStage?: EnumStartupStageFieldUpdateOperationsInput | $Enums.StartupStage
    startupGoals?: StringFieldUpdateOperationsInput | string
    startupCommitment?: EnumCommitmentLevelFieldUpdateOperationsInput | $Enums.CommitmentLevel
    lookingFor?: StartupinfoUpdatelookingForInput | string[]
  }

  export type StartupinfoCreateManyInput = {
    id?: string
    userId: string
    startupStage: $Enums.StartupStage
    startupGoals: string
    startupCommitment: $Enums.CommitmentLevel
    lookingFor?: StartupinfoCreatelookingForInput | string[]
  }

  export type StartupinfoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startupStage?: EnumStartupStageFieldUpdateOperationsInput | $Enums.StartupStage
    startupGoals?: StringFieldUpdateOperationsInput | string
    startupCommitment?: EnumCommitmentLevelFieldUpdateOperationsInput | $Enums.CommitmentLevel
    lookingFor?: StartupinfoUpdatelookingForInput | string[]
  }

  export type StartupinfoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startupStage?: EnumStartupStageFieldUpdateOperationsInput | $Enums.StartupStage
    startupGoals?: StringFieldUpdateOperationsInput | string
    startupCommitment?: EnumCommitmentLevelFieldUpdateOperationsInput | $Enums.CommitmentLevel
    lookingFor?: StartupinfoUpdatelookingForInput | string[]
  }

  export type ContactInfoCreateInput = {
    id?: string
    email?: string | null
    twitterUrl?: string | null
    linkedinUrl?: string | null
    scheduleUrl?: string | null
    user: UserCreateNestedOneWithoutContactInfoInput
  }

  export type ContactInfoUncheckedCreateInput = {
    id?: string
    userId: string
    email?: string | null
    twitterUrl?: string | null
    linkedinUrl?: string | null
    scheduleUrl?: string | null
  }

  export type ContactInfoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleUrl?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutContactInfoNestedInput
  }

  export type ContactInfoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContactInfoCreateManyInput = {
    id?: string
    userId: string
    email?: string | null
    twitterUrl?: string | null
    linkedinUrl?: string | null
    scheduleUrl?: string | null
  }

  export type ContactInfoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContactInfoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    description: string
    link?: string | null
    user: UserCreateNestedOneWithoutPastProjectsInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    link?: string | null
    userId: string
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutPastProjectsNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateManyInput = {
    id?: string
    name: string
    description: string
    link?: string | null
    userId: string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserLocationCreateInput = {
    id?: string
    userId: string
    latitude: number
    longitude: number
    geohash: string
  }

  export type UserLocationUncheckedCreateInput = {
    id?: string
    userId: string
    latitude: number
    longitude: number
    geohash: string
  }

  export type UserLocationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    geohash?: StringFieldUpdateOperationsInput | string
  }

  export type UserLocationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    geohash?: StringFieldUpdateOperationsInput | string
  }

  export type UserLocationCreateManyInput = {
    id?: string
    userId: string
    latitude: number
    longitude: number
    geohash: string
  }

  export type UserLocationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    geohash?: StringFieldUpdateOperationsInput | string
  }

  export type UserLocationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    geohash?: StringFieldUpdateOperationsInput | string
  }

  export type ReportCreateInput = {
    id?: string
    reason: string
    createdAt?: Date | string
    reported: UserCreateNestedOneWithoutReportsReceivedInput
    reporter: UserCreateNestedOneWithoutReportsFiledInput
  }

  export type ReportUncheckedCreateInput = {
    id?: string
    reportedId: string
    reporterId: string
    reason: string
    createdAt?: Date | string
  }

  export type ReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reported?: UserUpdateOneRequiredWithoutReportsReceivedNestedInput
    reporter?: UserUpdateOneRequiredWithoutReportsFiledNestedInput
  }

  export type ReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportedId?: StringFieldUpdateOperationsInput | string
    reporterId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateManyInput = {
    id?: string
    reportedId: string
    reporterId: string
    reason: string
    createdAt?: Date | string
  }

  export type ReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportedId?: StringFieldUpdateOperationsInput | string
    reporterId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchCreateInput = {
    id?: string
    mutual?: boolean
    createdAt?: Date | string
    userA: UserCreateNestedOneWithoutMatchesInitiatedInput
    userB: UserCreateNestedOneWithoutMatchesReceivedInput
  }

  export type MatchUncheckedCreateInput = {
    id?: string
    userAId: string
    userBId: string
    mutual?: boolean
    createdAt?: Date | string
  }

  export type MatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mutual?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userA?: UserUpdateOneRequiredWithoutMatchesInitiatedNestedInput
    userB?: UserUpdateOneRequiredWithoutMatchesReceivedNestedInput
  }

  export type MatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAId?: StringFieldUpdateOperationsInput | string
    userBId?: StringFieldUpdateOperationsInput | string
    mutual?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchCreateManyInput = {
    id?: string
    userAId: string
    userBId: string
    mutual?: boolean
    createdAt?: Date | string
  }

  export type MatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mutual?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAId?: StringFieldUpdateOperationsInput | string
    userBId?: StringFieldUpdateOperationsInput | string
    mutual?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewCreateInput = {
    id?: string
    createdAt?: Date | string
    userA: UserCreateNestedOneWithoutViewsGivenInput
    userB: UserCreateNestedOneWithoutViewsReceivedInput
  }

  export type ViewUncheckedCreateInput = {
    id?: string
    userAId: string
    userBId: string
    createdAt?: Date | string
  }

  export type ViewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userA?: UserUpdateOneRequiredWithoutViewsGivenNestedInput
    userB?: UserUpdateOneRequiredWithoutViewsReceivedNestedInput
  }

  export type ViewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAId?: StringFieldUpdateOperationsInput | string
    userBId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewCreateManyInput = {
    id?: string
    userAId: string
    userBId: string
    createdAt?: Date | string
  }

  export type ViewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAId?: StringFieldUpdateOperationsInput | string
    userBId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumWorkingStyleFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkingStyle | EnumWorkingStyleFieldRefInput<$PrismaModel>
    in?: $Enums.WorkingStyle[] | ListEnumWorkingStyleFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkingStyle[] | ListEnumWorkingStyleFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkingStyleFilter<$PrismaModel> | $Enums.WorkingStyle
  }

  export type EnumCollaborationPrefFilter<$PrismaModel = never> = {
    equals?: $Enums.CollaborationPref | EnumCollaborationPrefFieldRefInput<$PrismaModel>
    in?: $Enums.CollaborationPref[] | ListEnumCollaborationPrefFieldRefInput<$PrismaModel>
    notIn?: $Enums.CollaborationPref[] | ListEnumCollaborationPrefFieldRefInput<$PrismaModel>
    not?: NestedEnumCollaborationPrefFilter<$PrismaModel> | $Enums.CollaborationPref
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

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type StartupinfoNullableScalarRelationFilter = {
    is?: StartupinfoWhereInput | null
    isNot?: StartupinfoWhereInput | null
  }

  export type ContactInfoNullableScalarRelationFilter = {
    is?: ContactInfoWhereInput | null
    isNot?: ContactInfoWhereInput | null
  }

  export type ReportListRelationFilter = {
    every?: ReportWhereInput
    some?: ReportWhereInput
    none?: ReportWhereInput
  }

  export type MatchListRelationFilter = {
    every?: MatchWhereInput
    some?: MatchWhereInput
    none?: MatchWhereInput
  }

  export type ViewListRelationFilter = {
    every?: ViewWhereInput
    some?: ViewWhereInput
    none?: ViewWhereInput
  }

  export type AdminListRelationFilter = {
    every?: AdminWhereInput
    some?: AdminWhereInput
    none?: AdminWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ViewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    avatarUrl?: SortOrder
    location?: SortOrder
    personalityTags?: SortOrder
    workingStyle?: SortOrder
    collaborationPref?: SortOrder
    currentRole?: SortOrder
    yearsExperience?: SortOrder
    domainExpertise?: SortOrder
    skills?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    yearsExperience?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    avatarUrl?: SortOrder
    location?: SortOrder
    workingStyle?: SortOrder
    collaborationPref?: SortOrder
    currentRole?: SortOrder
    yearsExperience?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    avatarUrl?: SortOrder
    location?: SortOrder
    workingStyle?: SortOrder
    collaborationPref?: SortOrder
    currentRole?: SortOrder
    yearsExperience?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    yearsExperience?: SortOrder
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

  export type EnumWorkingStyleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkingStyle | EnumWorkingStyleFieldRefInput<$PrismaModel>
    in?: $Enums.WorkingStyle[] | ListEnumWorkingStyleFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkingStyle[] | ListEnumWorkingStyleFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkingStyleWithAggregatesFilter<$PrismaModel> | $Enums.WorkingStyle
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkingStyleFilter<$PrismaModel>
    _max?: NestedEnumWorkingStyleFilter<$PrismaModel>
  }

  export type EnumCollaborationPrefWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CollaborationPref | EnumCollaborationPrefFieldRefInput<$PrismaModel>
    in?: $Enums.CollaborationPref[] | ListEnumCollaborationPrefFieldRefInput<$PrismaModel>
    notIn?: $Enums.CollaborationPref[] | ListEnumCollaborationPrefFieldRefInput<$PrismaModel>
    not?: NestedEnumCollaborationPrefWithAggregatesFilter<$PrismaModel> | $Enums.CollaborationPref
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCollaborationPrefFilter<$PrismaModel>
    _max?: NestedEnumCollaborationPrefFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumStartupStageFilter<$PrismaModel = never> = {
    equals?: $Enums.StartupStage | EnumStartupStageFieldRefInput<$PrismaModel>
    in?: $Enums.StartupStage[] | ListEnumStartupStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.StartupStage[] | ListEnumStartupStageFieldRefInput<$PrismaModel>
    not?: NestedEnumStartupStageFilter<$PrismaModel> | $Enums.StartupStage
  }

  export type EnumCommitmentLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.CommitmentLevel | EnumCommitmentLevelFieldRefInput<$PrismaModel>
    in?: $Enums.CommitmentLevel[] | ListEnumCommitmentLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommitmentLevel[] | ListEnumCommitmentLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumCommitmentLevelFilter<$PrismaModel> | $Enums.CommitmentLevel
  }

  export type StartupinfoCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    startupStage?: SortOrder
    startupGoals?: SortOrder
    startupCommitment?: SortOrder
    lookingFor?: SortOrder
  }

  export type StartupinfoMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    startupStage?: SortOrder
    startupGoals?: SortOrder
    startupCommitment?: SortOrder
  }

  export type StartupinfoMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    startupStage?: SortOrder
    startupGoals?: SortOrder
    startupCommitment?: SortOrder
  }

  export type EnumStartupStageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StartupStage | EnumStartupStageFieldRefInput<$PrismaModel>
    in?: $Enums.StartupStage[] | ListEnumStartupStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.StartupStage[] | ListEnumStartupStageFieldRefInput<$PrismaModel>
    not?: NestedEnumStartupStageWithAggregatesFilter<$PrismaModel> | $Enums.StartupStage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStartupStageFilter<$PrismaModel>
    _max?: NestedEnumStartupStageFilter<$PrismaModel>
  }

  export type EnumCommitmentLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CommitmentLevel | EnumCommitmentLevelFieldRefInput<$PrismaModel>
    in?: $Enums.CommitmentLevel[] | ListEnumCommitmentLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommitmentLevel[] | ListEnumCommitmentLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumCommitmentLevelWithAggregatesFilter<$PrismaModel> | $Enums.CommitmentLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCommitmentLevelFilter<$PrismaModel>
    _max?: NestedEnumCommitmentLevelFilter<$PrismaModel>
  }

  export type ContactInfoCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    twitterUrl?: SortOrder
    linkedinUrl?: SortOrder
    scheduleUrl?: SortOrder
  }

  export type ContactInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    twitterUrl?: SortOrder
    linkedinUrl?: SortOrder
    scheduleUrl?: SortOrder
  }

  export type ContactInfoMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    twitterUrl?: SortOrder
    linkedinUrl?: SortOrder
    scheduleUrl?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    link?: SortOrder
    userId?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    link?: SortOrder
    userId?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    link?: SortOrder
    userId?: SortOrder
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

  export type UserLocationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    geohash?: SortOrder
  }

  export type UserLocationAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type UserLocationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    geohash?: SortOrder
  }

  export type UserLocationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    geohash?: SortOrder
  }

  export type UserLocationSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
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

  export type ReportCountOrderByAggregateInput = {
    id?: SortOrder
    reportedId?: SortOrder
    reporterId?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type ReportMaxOrderByAggregateInput = {
    id?: SortOrder
    reportedId?: SortOrder
    reporterId?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type ReportMinOrderByAggregateInput = {
    id?: SortOrder
    reportedId?: SortOrder
    reporterId?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MatchUserAIdUserBIdCompoundUniqueInput = {
    userAId: string
    userBId: string
  }

  export type MatchCountOrderByAggregateInput = {
    id?: SortOrder
    userAId?: SortOrder
    userBId?: SortOrder
    mutual?: SortOrder
    createdAt?: SortOrder
  }

  export type MatchMaxOrderByAggregateInput = {
    id?: SortOrder
    userAId?: SortOrder
    userBId?: SortOrder
    mutual?: SortOrder
    createdAt?: SortOrder
  }

  export type MatchMinOrderByAggregateInput = {
    id?: SortOrder
    userAId?: SortOrder
    userBId?: SortOrder
    mutual?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ViewUserAIdUserBIdCompoundUniqueInput = {
    userAId: string
    userBId: string
  }

  export type ViewCountOrderByAggregateInput = {
    id?: SortOrder
    userAId?: SortOrder
    userBId?: SortOrder
    createdAt?: SortOrder
  }

  export type ViewMaxOrderByAggregateInput = {
    id?: SortOrder
    userAId?: SortOrder
    userBId?: SortOrder
    createdAt?: SortOrder
  }

  export type ViewMinOrderByAggregateInput = {
    id?: SortOrder
    userAId?: SortOrder
    userBId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserCreatepersonalityTagsInput = {
    set: string[]
  }

  export type UserCreatedomainExpertiseInput = {
    set: string[]
  }

  export type UserCreateskillsInput = {
    set: string[]
  }

  export type ProjectCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type StartupinfoCreateNestedOneWithoutUserInput = {
    create?: XOR<StartupinfoCreateWithoutUserInput, StartupinfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: StartupinfoCreateOrConnectWithoutUserInput
    connect?: StartupinfoWhereUniqueInput
  }

  export type ContactInfoCreateNestedOneWithoutUserInput = {
    create?: XOR<ContactInfoCreateWithoutUserInput, ContactInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: ContactInfoCreateOrConnectWithoutUserInput
    connect?: ContactInfoWhereUniqueInput
  }

  export type ReportCreateNestedManyWithoutReporterInput = {
    create?: XOR<ReportCreateWithoutReporterInput, ReportUncheckedCreateWithoutReporterInput> | ReportCreateWithoutReporterInput[] | ReportUncheckedCreateWithoutReporterInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutReporterInput | ReportCreateOrConnectWithoutReporterInput[]
    createMany?: ReportCreateManyReporterInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type ReportCreateNestedManyWithoutReportedInput = {
    create?: XOR<ReportCreateWithoutReportedInput, ReportUncheckedCreateWithoutReportedInput> | ReportCreateWithoutReportedInput[] | ReportUncheckedCreateWithoutReportedInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutReportedInput | ReportCreateOrConnectWithoutReportedInput[]
    createMany?: ReportCreateManyReportedInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutUserAInput = {
    create?: XOR<MatchCreateWithoutUserAInput, MatchUncheckedCreateWithoutUserAInput> | MatchCreateWithoutUserAInput[] | MatchUncheckedCreateWithoutUserAInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutUserAInput | MatchCreateOrConnectWithoutUserAInput[]
    createMany?: MatchCreateManyUserAInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutUserBInput = {
    create?: XOR<MatchCreateWithoutUserBInput, MatchUncheckedCreateWithoutUserBInput> | MatchCreateWithoutUserBInput[] | MatchUncheckedCreateWithoutUserBInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutUserBInput | MatchCreateOrConnectWithoutUserBInput[]
    createMany?: MatchCreateManyUserBInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type ViewCreateNestedManyWithoutUserAInput = {
    create?: XOR<ViewCreateWithoutUserAInput, ViewUncheckedCreateWithoutUserAInput> | ViewCreateWithoutUserAInput[] | ViewUncheckedCreateWithoutUserAInput[]
    connectOrCreate?: ViewCreateOrConnectWithoutUserAInput | ViewCreateOrConnectWithoutUserAInput[]
    createMany?: ViewCreateManyUserAInputEnvelope
    connect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
  }

  export type ViewCreateNestedManyWithoutUserBInput = {
    create?: XOR<ViewCreateWithoutUserBInput, ViewUncheckedCreateWithoutUserBInput> | ViewCreateWithoutUserBInput[] | ViewUncheckedCreateWithoutUserBInput[]
    connectOrCreate?: ViewCreateOrConnectWithoutUserBInput | ViewCreateOrConnectWithoutUserBInput[]
    createMany?: ViewCreateManyUserBInputEnvelope
    connect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
  }

  export type AdminCreateNestedManyWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput> | AdminCreateWithoutUserInput[] | AdminUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput | AdminCreateOrConnectWithoutUserInput[]
    createMany?: AdminCreateManyUserInputEnvelope
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type StartupinfoUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StartupinfoCreateWithoutUserInput, StartupinfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: StartupinfoCreateOrConnectWithoutUserInput
    connect?: StartupinfoWhereUniqueInput
  }

  export type ContactInfoUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ContactInfoCreateWithoutUserInput, ContactInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: ContactInfoCreateOrConnectWithoutUserInput
    connect?: ContactInfoWhereUniqueInput
  }

  export type ReportUncheckedCreateNestedManyWithoutReporterInput = {
    create?: XOR<ReportCreateWithoutReporterInput, ReportUncheckedCreateWithoutReporterInput> | ReportCreateWithoutReporterInput[] | ReportUncheckedCreateWithoutReporterInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutReporterInput | ReportCreateOrConnectWithoutReporterInput[]
    createMany?: ReportCreateManyReporterInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutReportedInput = {
    create?: XOR<ReportCreateWithoutReportedInput, ReportUncheckedCreateWithoutReportedInput> | ReportCreateWithoutReportedInput[] | ReportUncheckedCreateWithoutReportedInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutReportedInput | ReportCreateOrConnectWithoutReportedInput[]
    createMany?: ReportCreateManyReportedInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutUserAInput = {
    create?: XOR<MatchCreateWithoutUserAInput, MatchUncheckedCreateWithoutUserAInput> | MatchCreateWithoutUserAInput[] | MatchUncheckedCreateWithoutUserAInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutUserAInput | MatchCreateOrConnectWithoutUserAInput[]
    createMany?: MatchCreateManyUserAInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutUserBInput = {
    create?: XOR<MatchCreateWithoutUserBInput, MatchUncheckedCreateWithoutUserBInput> | MatchCreateWithoutUserBInput[] | MatchUncheckedCreateWithoutUserBInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutUserBInput | MatchCreateOrConnectWithoutUserBInput[]
    createMany?: MatchCreateManyUserBInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type ViewUncheckedCreateNestedManyWithoutUserAInput = {
    create?: XOR<ViewCreateWithoutUserAInput, ViewUncheckedCreateWithoutUserAInput> | ViewCreateWithoutUserAInput[] | ViewUncheckedCreateWithoutUserAInput[]
    connectOrCreate?: ViewCreateOrConnectWithoutUserAInput | ViewCreateOrConnectWithoutUserAInput[]
    createMany?: ViewCreateManyUserAInputEnvelope
    connect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
  }

  export type ViewUncheckedCreateNestedManyWithoutUserBInput = {
    create?: XOR<ViewCreateWithoutUserBInput, ViewUncheckedCreateWithoutUserBInput> | ViewCreateWithoutUserBInput[] | ViewUncheckedCreateWithoutUserBInput[]
    connectOrCreate?: ViewCreateOrConnectWithoutUserBInput | ViewCreateOrConnectWithoutUserBInput[]
    createMany?: ViewCreateManyUserBInputEnvelope
    connect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
  }

  export type AdminUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput> | AdminCreateWithoutUserInput[] | AdminUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput | AdminCreateOrConnectWithoutUserInput[]
    createMany?: AdminCreateManyUserInputEnvelope
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdatepersonalityTagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumWorkingStyleFieldUpdateOperationsInput = {
    set?: $Enums.WorkingStyle
  }

  export type EnumCollaborationPrefFieldUpdateOperationsInput = {
    set?: $Enums.CollaborationPref
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdatedomainExpertiseInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateskillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProjectUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type StartupinfoUpdateOneWithoutUserNestedInput = {
    create?: XOR<StartupinfoCreateWithoutUserInput, StartupinfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: StartupinfoCreateOrConnectWithoutUserInput
    upsert?: StartupinfoUpsertWithoutUserInput
    disconnect?: StartupinfoWhereInput | boolean
    delete?: StartupinfoWhereInput | boolean
    connect?: StartupinfoWhereUniqueInput
    update?: XOR<XOR<StartupinfoUpdateToOneWithWhereWithoutUserInput, StartupinfoUpdateWithoutUserInput>, StartupinfoUncheckedUpdateWithoutUserInput>
  }

  export type ContactInfoUpdateOneWithoutUserNestedInput = {
    create?: XOR<ContactInfoCreateWithoutUserInput, ContactInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: ContactInfoCreateOrConnectWithoutUserInput
    upsert?: ContactInfoUpsertWithoutUserInput
    disconnect?: ContactInfoWhereInput | boolean
    delete?: ContactInfoWhereInput | boolean
    connect?: ContactInfoWhereUniqueInput
    update?: XOR<XOR<ContactInfoUpdateToOneWithWhereWithoutUserInput, ContactInfoUpdateWithoutUserInput>, ContactInfoUncheckedUpdateWithoutUserInput>
  }

  export type ReportUpdateManyWithoutReporterNestedInput = {
    create?: XOR<ReportCreateWithoutReporterInput, ReportUncheckedCreateWithoutReporterInput> | ReportCreateWithoutReporterInput[] | ReportUncheckedCreateWithoutReporterInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutReporterInput | ReportCreateOrConnectWithoutReporterInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutReporterInput | ReportUpsertWithWhereUniqueWithoutReporterInput[]
    createMany?: ReportCreateManyReporterInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutReporterInput | ReportUpdateWithWhereUniqueWithoutReporterInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutReporterInput | ReportUpdateManyWithWhereWithoutReporterInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type ReportUpdateManyWithoutReportedNestedInput = {
    create?: XOR<ReportCreateWithoutReportedInput, ReportUncheckedCreateWithoutReportedInput> | ReportCreateWithoutReportedInput[] | ReportUncheckedCreateWithoutReportedInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutReportedInput | ReportCreateOrConnectWithoutReportedInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutReportedInput | ReportUpsertWithWhereUniqueWithoutReportedInput[]
    createMany?: ReportCreateManyReportedInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutReportedInput | ReportUpdateWithWhereUniqueWithoutReportedInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutReportedInput | ReportUpdateManyWithWhereWithoutReportedInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutUserANestedInput = {
    create?: XOR<MatchCreateWithoutUserAInput, MatchUncheckedCreateWithoutUserAInput> | MatchCreateWithoutUserAInput[] | MatchUncheckedCreateWithoutUserAInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutUserAInput | MatchCreateOrConnectWithoutUserAInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutUserAInput | MatchUpsertWithWhereUniqueWithoutUserAInput[]
    createMany?: MatchCreateManyUserAInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutUserAInput | MatchUpdateWithWhereUniqueWithoutUserAInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutUserAInput | MatchUpdateManyWithWhereWithoutUserAInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutUserBNestedInput = {
    create?: XOR<MatchCreateWithoutUserBInput, MatchUncheckedCreateWithoutUserBInput> | MatchCreateWithoutUserBInput[] | MatchUncheckedCreateWithoutUserBInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutUserBInput | MatchCreateOrConnectWithoutUserBInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutUserBInput | MatchUpsertWithWhereUniqueWithoutUserBInput[]
    createMany?: MatchCreateManyUserBInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutUserBInput | MatchUpdateWithWhereUniqueWithoutUserBInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutUserBInput | MatchUpdateManyWithWhereWithoutUserBInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type ViewUpdateManyWithoutUserANestedInput = {
    create?: XOR<ViewCreateWithoutUserAInput, ViewUncheckedCreateWithoutUserAInput> | ViewCreateWithoutUserAInput[] | ViewUncheckedCreateWithoutUserAInput[]
    connectOrCreate?: ViewCreateOrConnectWithoutUserAInput | ViewCreateOrConnectWithoutUserAInput[]
    upsert?: ViewUpsertWithWhereUniqueWithoutUserAInput | ViewUpsertWithWhereUniqueWithoutUserAInput[]
    createMany?: ViewCreateManyUserAInputEnvelope
    set?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    disconnect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    delete?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    connect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    update?: ViewUpdateWithWhereUniqueWithoutUserAInput | ViewUpdateWithWhereUniqueWithoutUserAInput[]
    updateMany?: ViewUpdateManyWithWhereWithoutUserAInput | ViewUpdateManyWithWhereWithoutUserAInput[]
    deleteMany?: ViewScalarWhereInput | ViewScalarWhereInput[]
  }

  export type ViewUpdateManyWithoutUserBNestedInput = {
    create?: XOR<ViewCreateWithoutUserBInput, ViewUncheckedCreateWithoutUserBInput> | ViewCreateWithoutUserBInput[] | ViewUncheckedCreateWithoutUserBInput[]
    connectOrCreate?: ViewCreateOrConnectWithoutUserBInput | ViewCreateOrConnectWithoutUserBInput[]
    upsert?: ViewUpsertWithWhereUniqueWithoutUserBInput | ViewUpsertWithWhereUniqueWithoutUserBInput[]
    createMany?: ViewCreateManyUserBInputEnvelope
    set?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    disconnect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    delete?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    connect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    update?: ViewUpdateWithWhereUniqueWithoutUserBInput | ViewUpdateWithWhereUniqueWithoutUserBInput[]
    updateMany?: ViewUpdateManyWithWhereWithoutUserBInput | ViewUpdateManyWithWhereWithoutUserBInput[]
    deleteMany?: ViewScalarWhereInput | ViewScalarWhereInput[]
  }

  export type AdminUpdateManyWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput> | AdminCreateWithoutUserInput[] | AdminUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput | AdminCreateOrConnectWithoutUserInput[]
    upsert?: AdminUpsertWithWhereUniqueWithoutUserInput | AdminUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AdminCreateManyUserInputEnvelope
    set?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    disconnect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    delete?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    update?: AdminUpdateWithWhereUniqueWithoutUserInput | AdminUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AdminUpdateManyWithWhereWithoutUserInput | AdminUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AdminScalarWhereInput | AdminScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type StartupinfoUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StartupinfoCreateWithoutUserInput, StartupinfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: StartupinfoCreateOrConnectWithoutUserInput
    upsert?: StartupinfoUpsertWithoutUserInput
    disconnect?: StartupinfoWhereInput | boolean
    delete?: StartupinfoWhereInput | boolean
    connect?: StartupinfoWhereUniqueInput
    update?: XOR<XOR<StartupinfoUpdateToOneWithWhereWithoutUserInput, StartupinfoUpdateWithoutUserInput>, StartupinfoUncheckedUpdateWithoutUserInput>
  }

  export type ContactInfoUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ContactInfoCreateWithoutUserInput, ContactInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: ContactInfoCreateOrConnectWithoutUserInput
    upsert?: ContactInfoUpsertWithoutUserInput
    disconnect?: ContactInfoWhereInput | boolean
    delete?: ContactInfoWhereInput | boolean
    connect?: ContactInfoWhereUniqueInput
    update?: XOR<XOR<ContactInfoUpdateToOneWithWhereWithoutUserInput, ContactInfoUpdateWithoutUserInput>, ContactInfoUncheckedUpdateWithoutUserInput>
  }

  export type ReportUncheckedUpdateManyWithoutReporterNestedInput = {
    create?: XOR<ReportCreateWithoutReporterInput, ReportUncheckedCreateWithoutReporterInput> | ReportCreateWithoutReporterInput[] | ReportUncheckedCreateWithoutReporterInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutReporterInput | ReportCreateOrConnectWithoutReporterInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutReporterInput | ReportUpsertWithWhereUniqueWithoutReporterInput[]
    createMany?: ReportCreateManyReporterInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutReporterInput | ReportUpdateWithWhereUniqueWithoutReporterInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutReporterInput | ReportUpdateManyWithWhereWithoutReporterInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutReportedNestedInput = {
    create?: XOR<ReportCreateWithoutReportedInput, ReportUncheckedCreateWithoutReportedInput> | ReportCreateWithoutReportedInput[] | ReportUncheckedCreateWithoutReportedInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutReportedInput | ReportCreateOrConnectWithoutReportedInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutReportedInput | ReportUpsertWithWhereUniqueWithoutReportedInput[]
    createMany?: ReportCreateManyReportedInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutReportedInput | ReportUpdateWithWhereUniqueWithoutReportedInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutReportedInput | ReportUpdateManyWithWhereWithoutReportedInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutUserANestedInput = {
    create?: XOR<MatchCreateWithoutUserAInput, MatchUncheckedCreateWithoutUserAInput> | MatchCreateWithoutUserAInput[] | MatchUncheckedCreateWithoutUserAInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutUserAInput | MatchCreateOrConnectWithoutUserAInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutUserAInput | MatchUpsertWithWhereUniqueWithoutUserAInput[]
    createMany?: MatchCreateManyUserAInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutUserAInput | MatchUpdateWithWhereUniqueWithoutUserAInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutUserAInput | MatchUpdateManyWithWhereWithoutUserAInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutUserBNestedInput = {
    create?: XOR<MatchCreateWithoutUserBInput, MatchUncheckedCreateWithoutUserBInput> | MatchCreateWithoutUserBInput[] | MatchUncheckedCreateWithoutUserBInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutUserBInput | MatchCreateOrConnectWithoutUserBInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutUserBInput | MatchUpsertWithWhereUniqueWithoutUserBInput[]
    createMany?: MatchCreateManyUserBInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutUserBInput | MatchUpdateWithWhereUniqueWithoutUserBInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutUserBInput | MatchUpdateManyWithWhereWithoutUserBInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type ViewUncheckedUpdateManyWithoutUserANestedInput = {
    create?: XOR<ViewCreateWithoutUserAInput, ViewUncheckedCreateWithoutUserAInput> | ViewCreateWithoutUserAInput[] | ViewUncheckedCreateWithoutUserAInput[]
    connectOrCreate?: ViewCreateOrConnectWithoutUserAInput | ViewCreateOrConnectWithoutUserAInput[]
    upsert?: ViewUpsertWithWhereUniqueWithoutUserAInput | ViewUpsertWithWhereUniqueWithoutUserAInput[]
    createMany?: ViewCreateManyUserAInputEnvelope
    set?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    disconnect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    delete?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    connect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    update?: ViewUpdateWithWhereUniqueWithoutUserAInput | ViewUpdateWithWhereUniqueWithoutUserAInput[]
    updateMany?: ViewUpdateManyWithWhereWithoutUserAInput | ViewUpdateManyWithWhereWithoutUserAInput[]
    deleteMany?: ViewScalarWhereInput | ViewScalarWhereInput[]
  }

  export type ViewUncheckedUpdateManyWithoutUserBNestedInput = {
    create?: XOR<ViewCreateWithoutUserBInput, ViewUncheckedCreateWithoutUserBInput> | ViewCreateWithoutUserBInput[] | ViewUncheckedCreateWithoutUserBInput[]
    connectOrCreate?: ViewCreateOrConnectWithoutUserBInput | ViewCreateOrConnectWithoutUserBInput[]
    upsert?: ViewUpsertWithWhereUniqueWithoutUserBInput | ViewUpsertWithWhereUniqueWithoutUserBInput[]
    createMany?: ViewCreateManyUserBInputEnvelope
    set?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    disconnect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    delete?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    connect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    update?: ViewUpdateWithWhereUniqueWithoutUserBInput | ViewUpdateWithWhereUniqueWithoutUserBInput[]
    updateMany?: ViewUpdateManyWithWhereWithoutUserBInput | ViewUpdateManyWithWhereWithoutUserBInput[]
    deleteMany?: ViewScalarWhereInput | ViewScalarWhereInput[]
  }

  export type AdminUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput> | AdminCreateWithoutUserInput[] | AdminUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput | AdminCreateOrConnectWithoutUserInput[]
    upsert?: AdminUpsertWithWhereUniqueWithoutUserInput | AdminUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AdminCreateManyUserInputEnvelope
    set?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    disconnect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    delete?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    update?: AdminUpdateWithWhereUniqueWithoutUserInput | AdminUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AdminUpdateManyWithWhereWithoutUserInput | AdminUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AdminScalarWhereInput | AdminScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAdminInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAdminNestedInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    upsert?: UserUpsertWithoutAdminInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdminInput, UserUpdateWithoutAdminInput>, UserUncheckedUpdateWithoutAdminInput>
  }

  export type StartupinfoCreatelookingForInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutStartupInfoInput = {
    create?: XOR<UserCreateWithoutStartupInfoInput, UserUncheckedCreateWithoutStartupInfoInput>
    connectOrCreate?: UserCreateOrConnectWithoutStartupInfoInput
    connect?: UserWhereUniqueInput
  }

  export type EnumStartupStageFieldUpdateOperationsInput = {
    set?: $Enums.StartupStage
  }

  export type EnumCommitmentLevelFieldUpdateOperationsInput = {
    set?: $Enums.CommitmentLevel
  }

  export type StartupinfoUpdatelookingForInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutStartupInfoNestedInput = {
    create?: XOR<UserCreateWithoutStartupInfoInput, UserUncheckedCreateWithoutStartupInfoInput>
    connectOrCreate?: UserCreateOrConnectWithoutStartupInfoInput
    upsert?: UserUpsertWithoutStartupInfoInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStartupInfoInput, UserUpdateWithoutStartupInfoInput>, UserUncheckedUpdateWithoutStartupInfoInput>
  }

  export type UserCreateNestedOneWithoutContactInfoInput = {
    create?: XOR<UserCreateWithoutContactInfoInput, UserUncheckedCreateWithoutContactInfoInput>
    connectOrCreate?: UserCreateOrConnectWithoutContactInfoInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutContactInfoNestedInput = {
    create?: XOR<UserCreateWithoutContactInfoInput, UserUncheckedCreateWithoutContactInfoInput>
    connectOrCreate?: UserCreateOrConnectWithoutContactInfoInput
    upsert?: UserUpsertWithoutContactInfoInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContactInfoInput, UserUpdateWithoutContactInfoInput>, UserUncheckedUpdateWithoutContactInfoInput>
  }

  export type UserCreateNestedOneWithoutPastProjectsInput = {
    create?: XOR<UserCreateWithoutPastProjectsInput, UserUncheckedCreateWithoutPastProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPastProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPastProjectsNestedInput = {
    create?: XOR<UserCreateWithoutPastProjectsInput, UserUncheckedCreateWithoutPastProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPastProjectsInput
    upsert?: UserUpsertWithoutPastProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPastProjectsInput, UserUpdateWithoutPastProjectsInput>, UserUncheckedUpdateWithoutPastProjectsInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutReportsReceivedInput = {
    create?: XOR<UserCreateWithoutReportsReceivedInput, UserUncheckedCreateWithoutReportsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportsReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReportsFiledInput = {
    create?: XOR<UserCreateWithoutReportsFiledInput, UserUncheckedCreateWithoutReportsFiledInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportsFiledInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReportsReceivedNestedInput = {
    create?: XOR<UserCreateWithoutReportsReceivedInput, UserUncheckedCreateWithoutReportsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportsReceivedInput
    upsert?: UserUpsertWithoutReportsReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReportsReceivedInput, UserUpdateWithoutReportsReceivedInput>, UserUncheckedUpdateWithoutReportsReceivedInput>
  }

  export type UserUpdateOneRequiredWithoutReportsFiledNestedInput = {
    create?: XOR<UserCreateWithoutReportsFiledInput, UserUncheckedCreateWithoutReportsFiledInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportsFiledInput
    upsert?: UserUpsertWithoutReportsFiledInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReportsFiledInput, UserUpdateWithoutReportsFiledInput>, UserUncheckedUpdateWithoutReportsFiledInput>
  }

  export type UserCreateNestedOneWithoutMatchesInitiatedInput = {
    create?: XOR<UserCreateWithoutMatchesInitiatedInput, UserUncheckedCreateWithoutMatchesInitiatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesInitiatedInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMatchesReceivedInput = {
    create?: XOR<UserCreateWithoutMatchesReceivedInput, UserUncheckedCreateWithoutMatchesReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutMatchesInitiatedNestedInput = {
    create?: XOR<UserCreateWithoutMatchesInitiatedInput, UserUncheckedCreateWithoutMatchesInitiatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesInitiatedInput
    upsert?: UserUpsertWithoutMatchesInitiatedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatchesInitiatedInput, UserUpdateWithoutMatchesInitiatedInput>, UserUncheckedUpdateWithoutMatchesInitiatedInput>
  }

  export type UserUpdateOneRequiredWithoutMatchesReceivedNestedInput = {
    create?: XOR<UserCreateWithoutMatchesReceivedInput, UserUncheckedCreateWithoutMatchesReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesReceivedInput
    upsert?: UserUpsertWithoutMatchesReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatchesReceivedInput, UserUpdateWithoutMatchesReceivedInput>, UserUncheckedUpdateWithoutMatchesReceivedInput>
  }

  export type UserCreateNestedOneWithoutViewsGivenInput = {
    create?: XOR<UserCreateWithoutViewsGivenInput, UserUncheckedCreateWithoutViewsGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutViewsGivenInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutViewsReceivedInput = {
    create?: XOR<UserCreateWithoutViewsReceivedInput, UserUncheckedCreateWithoutViewsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutViewsReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutViewsGivenNestedInput = {
    create?: XOR<UserCreateWithoutViewsGivenInput, UserUncheckedCreateWithoutViewsGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutViewsGivenInput
    upsert?: UserUpsertWithoutViewsGivenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutViewsGivenInput, UserUpdateWithoutViewsGivenInput>, UserUncheckedUpdateWithoutViewsGivenInput>
  }

  export type UserUpdateOneRequiredWithoutViewsReceivedNestedInput = {
    create?: XOR<UserCreateWithoutViewsReceivedInput, UserUncheckedCreateWithoutViewsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutViewsReceivedInput
    upsert?: UserUpsertWithoutViewsReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutViewsReceivedInput, UserUpdateWithoutViewsReceivedInput>, UserUncheckedUpdateWithoutViewsReceivedInput>
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

  export type NestedEnumWorkingStyleFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkingStyle | EnumWorkingStyleFieldRefInput<$PrismaModel>
    in?: $Enums.WorkingStyle[] | ListEnumWorkingStyleFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkingStyle[] | ListEnumWorkingStyleFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkingStyleFilter<$PrismaModel> | $Enums.WorkingStyle
  }

  export type NestedEnumCollaborationPrefFilter<$PrismaModel = never> = {
    equals?: $Enums.CollaborationPref | EnumCollaborationPrefFieldRefInput<$PrismaModel>
    in?: $Enums.CollaborationPref[] | ListEnumCollaborationPrefFieldRefInput<$PrismaModel>
    notIn?: $Enums.CollaborationPref[] | ListEnumCollaborationPrefFieldRefInput<$PrismaModel>
    not?: NestedEnumCollaborationPrefFilter<$PrismaModel> | $Enums.CollaborationPref
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

  export type NestedEnumWorkingStyleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkingStyle | EnumWorkingStyleFieldRefInput<$PrismaModel>
    in?: $Enums.WorkingStyle[] | ListEnumWorkingStyleFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkingStyle[] | ListEnumWorkingStyleFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkingStyleWithAggregatesFilter<$PrismaModel> | $Enums.WorkingStyle
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkingStyleFilter<$PrismaModel>
    _max?: NestedEnumWorkingStyleFilter<$PrismaModel>
  }

  export type NestedEnumCollaborationPrefWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CollaborationPref | EnumCollaborationPrefFieldRefInput<$PrismaModel>
    in?: $Enums.CollaborationPref[] | ListEnumCollaborationPrefFieldRefInput<$PrismaModel>
    notIn?: $Enums.CollaborationPref[] | ListEnumCollaborationPrefFieldRefInput<$PrismaModel>
    not?: NestedEnumCollaborationPrefWithAggregatesFilter<$PrismaModel> | $Enums.CollaborationPref
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCollaborationPrefFilter<$PrismaModel>
    _max?: NestedEnumCollaborationPrefFilter<$PrismaModel>
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

  export type NestedEnumStartupStageFilter<$PrismaModel = never> = {
    equals?: $Enums.StartupStage | EnumStartupStageFieldRefInput<$PrismaModel>
    in?: $Enums.StartupStage[] | ListEnumStartupStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.StartupStage[] | ListEnumStartupStageFieldRefInput<$PrismaModel>
    not?: NestedEnumStartupStageFilter<$PrismaModel> | $Enums.StartupStage
  }

  export type NestedEnumCommitmentLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.CommitmentLevel | EnumCommitmentLevelFieldRefInput<$PrismaModel>
    in?: $Enums.CommitmentLevel[] | ListEnumCommitmentLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommitmentLevel[] | ListEnumCommitmentLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumCommitmentLevelFilter<$PrismaModel> | $Enums.CommitmentLevel
  }

  export type NestedEnumStartupStageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StartupStage | EnumStartupStageFieldRefInput<$PrismaModel>
    in?: $Enums.StartupStage[] | ListEnumStartupStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.StartupStage[] | ListEnumStartupStageFieldRefInput<$PrismaModel>
    not?: NestedEnumStartupStageWithAggregatesFilter<$PrismaModel> | $Enums.StartupStage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStartupStageFilter<$PrismaModel>
    _max?: NestedEnumStartupStageFilter<$PrismaModel>
  }

  export type NestedEnumCommitmentLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CommitmentLevel | EnumCommitmentLevelFieldRefInput<$PrismaModel>
    in?: $Enums.CommitmentLevel[] | ListEnumCommitmentLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommitmentLevel[] | ListEnumCommitmentLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumCommitmentLevelWithAggregatesFilter<$PrismaModel> | $Enums.CommitmentLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCommitmentLevelFilter<$PrismaModel>
    _max?: NestedEnumCommitmentLevelFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProjectCreateWithoutUserInput = {
    id?: string
    name: string
    description: string
    link?: string | null
  }

  export type ProjectUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description: string
    link?: string | null
  }

  export type ProjectCreateOrConnectWithoutUserInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectCreateManyUserInputEnvelope = {
    data: ProjectCreateManyUserInput | ProjectCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StartupinfoCreateWithoutUserInput = {
    id?: string
    startupStage: $Enums.StartupStage
    startupGoals: string
    startupCommitment: $Enums.CommitmentLevel
    lookingFor?: StartupinfoCreatelookingForInput | string[]
  }

  export type StartupinfoUncheckedCreateWithoutUserInput = {
    id?: string
    startupStage: $Enums.StartupStage
    startupGoals: string
    startupCommitment: $Enums.CommitmentLevel
    lookingFor?: StartupinfoCreatelookingForInput | string[]
  }

  export type StartupinfoCreateOrConnectWithoutUserInput = {
    where: StartupinfoWhereUniqueInput
    create: XOR<StartupinfoCreateWithoutUserInput, StartupinfoUncheckedCreateWithoutUserInput>
  }

  export type ContactInfoCreateWithoutUserInput = {
    id?: string
    email?: string | null
    twitterUrl?: string | null
    linkedinUrl?: string | null
    scheduleUrl?: string | null
  }

  export type ContactInfoUncheckedCreateWithoutUserInput = {
    id?: string
    email?: string | null
    twitterUrl?: string | null
    linkedinUrl?: string | null
    scheduleUrl?: string | null
  }

  export type ContactInfoCreateOrConnectWithoutUserInput = {
    where: ContactInfoWhereUniqueInput
    create: XOR<ContactInfoCreateWithoutUserInput, ContactInfoUncheckedCreateWithoutUserInput>
  }

  export type ReportCreateWithoutReporterInput = {
    id?: string
    reason: string
    createdAt?: Date | string
    reported: UserCreateNestedOneWithoutReportsReceivedInput
  }

  export type ReportUncheckedCreateWithoutReporterInput = {
    id?: string
    reportedId: string
    reason: string
    createdAt?: Date | string
  }

  export type ReportCreateOrConnectWithoutReporterInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutReporterInput, ReportUncheckedCreateWithoutReporterInput>
  }

  export type ReportCreateManyReporterInputEnvelope = {
    data: ReportCreateManyReporterInput | ReportCreateManyReporterInput[]
    skipDuplicates?: boolean
  }

  export type ReportCreateWithoutReportedInput = {
    id?: string
    reason: string
    createdAt?: Date | string
    reporter: UserCreateNestedOneWithoutReportsFiledInput
  }

  export type ReportUncheckedCreateWithoutReportedInput = {
    id?: string
    reporterId: string
    reason: string
    createdAt?: Date | string
  }

  export type ReportCreateOrConnectWithoutReportedInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutReportedInput, ReportUncheckedCreateWithoutReportedInput>
  }

  export type ReportCreateManyReportedInputEnvelope = {
    data: ReportCreateManyReportedInput | ReportCreateManyReportedInput[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutUserAInput = {
    id?: string
    mutual?: boolean
    createdAt?: Date | string
    userB: UserCreateNestedOneWithoutMatchesReceivedInput
  }

  export type MatchUncheckedCreateWithoutUserAInput = {
    id?: string
    userBId: string
    mutual?: boolean
    createdAt?: Date | string
  }

  export type MatchCreateOrConnectWithoutUserAInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutUserAInput, MatchUncheckedCreateWithoutUserAInput>
  }

  export type MatchCreateManyUserAInputEnvelope = {
    data: MatchCreateManyUserAInput | MatchCreateManyUserAInput[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutUserBInput = {
    id?: string
    mutual?: boolean
    createdAt?: Date | string
    userA: UserCreateNestedOneWithoutMatchesInitiatedInput
  }

  export type MatchUncheckedCreateWithoutUserBInput = {
    id?: string
    userAId: string
    mutual?: boolean
    createdAt?: Date | string
  }

  export type MatchCreateOrConnectWithoutUserBInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutUserBInput, MatchUncheckedCreateWithoutUserBInput>
  }

  export type MatchCreateManyUserBInputEnvelope = {
    data: MatchCreateManyUserBInput | MatchCreateManyUserBInput[]
    skipDuplicates?: boolean
  }

  export type ViewCreateWithoutUserAInput = {
    id?: string
    createdAt?: Date | string
    userB: UserCreateNestedOneWithoutViewsReceivedInput
  }

  export type ViewUncheckedCreateWithoutUserAInput = {
    id?: string
    userBId: string
    createdAt?: Date | string
  }

  export type ViewCreateOrConnectWithoutUserAInput = {
    where: ViewWhereUniqueInput
    create: XOR<ViewCreateWithoutUserAInput, ViewUncheckedCreateWithoutUserAInput>
  }

  export type ViewCreateManyUserAInputEnvelope = {
    data: ViewCreateManyUserAInput | ViewCreateManyUserAInput[]
    skipDuplicates?: boolean
  }

  export type ViewCreateWithoutUserBInput = {
    id?: string
    createdAt?: Date | string
    userA: UserCreateNestedOneWithoutViewsGivenInput
  }

  export type ViewUncheckedCreateWithoutUserBInput = {
    id?: string
    userAId: string
    createdAt?: Date | string
  }

  export type ViewCreateOrConnectWithoutUserBInput = {
    where: ViewWhereUniqueInput
    create: XOR<ViewCreateWithoutUserBInput, ViewUncheckedCreateWithoutUserBInput>
  }

  export type ViewCreateManyUserBInputEnvelope = {
    data: ViewCreateManyUserBInput | ViewCreateManyUserBInput[]
    skipDuplicates?: boolean
  }

  export type AdminCreateWithoutUserInput = {
    id?: string
  }

  export type AdminUncheckedCreateWithoutUserInput = {
    id?: string
  }

  export type AdminCreateOrConnectWithoutUserInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
  }

  export type AdminCreateManyUserInputEnvelope = {
    data: AdminCreateManyUserInput | AdminCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
  }

  export type ProjectUpdateManyWithWhereWithoutUserInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    link?: StringNullableFilter<"Project"> | string | null
    userId?: StringFilter<"Project"> | string
  }

  export type StartupinfoUpsertWithoutUserInput = {
    update: XOR<StartupinfoUpdateWithoutUserInput, StartupinfoUncheckedUpdateWithoutUserInput>
    create: XOR<StartupinfoCreateWithoutUserInput, StartupinfoUncheckedCreateWithoutUserInput>
    where?: StartupinfoWhereInput
  }

  export type StartupinfoUpdateToOneWithWhereWithoutUserInput = {
    where?: StartupinfoWhereInput
    data: XOR<StartupinfoUpdateWithoutUserInput, StartupinfoUncheckedUpdateWithoutUserInput>
  }

  export type StartupinfoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startupStage?: EnumStartupStageFieldUpdateOperationsInput | $Enums.StartupStage
    startupGoals?: StringFieldUpdateOperationsInput | string
    startupCommitment?: EnumCommitmentLevelFieldUpdateOperationsInput | $Enums.CommitmentLevel
    lookingFor?: StartupinfoUpdatelookingForInput | string[]
  }

  export type StartupinfoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startupStage?: EnumStartupStageFieldUpdateOperationsInput | $Enums.StartupStage
    startupGoals?: StringFieldUpdateOperationsInput | string
    startupCommitment?: EnumCommitmentLevelFieldUpdateOperationsInput | $Enums.CommitmentLevel
    lookingFor?: StartupinfoUpdatelookingForInput | string[]
  }

  export type ContactInfoUpsertWithoutUserInput = {
    update: XOR<ContactInfoUpdateWithoutUserInput, ContactInfoUncheckedUpdateWithoutUserInput>
    create: XOR<ContactInfoCreateWithoutUserInput, ContactInfoUncheckedCreateWithoutUserInput>
    where?: ContactInfoWhereInput
  }

  export type ContactInfoUpdateToOneWithWhereWithoutUserInput = {
    where?: ContactInfoWhereInput
    data: XOR<ContactInfoUpdateWithoutUserInput, ContactInfoUncheckedUpdateWithoutUserInput>
  }

  export type ContactInfoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContactInfoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReportUpsertWithWhereUniqueWithoutReporterInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutReporterInput, ReportUncheckedUpdateWithoutReporterInput>
    create: XOR<ReportCreateWithoutReporterInput, ReportUncheckedCreateWithoutReporterInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutReporterInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutReporterInput, ReportUncheckedUpdateWithoutReporterInput>
  }

  export type ReportUpdateManyWithWhereWithoutReporterInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutReporterInput>
  }

  export type ReportScalarWhereInput = {
    AND?: ReportScalarWhereInput | ReportScalarWhereInput[]
    OR?: ReportScalarWhereInput[]
    NOT?: ReportScalarWhereInput | ReportScalarWhereInput[]
    id?: StringFilter<"Report"> | string
    reportedId?: StringFilter<"Report"> | string
    reporterId?: StringFilter<"Report"> | string
    reason?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
  }

  export type ReportUpsertWithWhereUniqueWithoutReportedInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutReportedInput, ReportUncheckedUpdateWithoutReportedInput>
    create: XOR<ReportCreateWithoutReportedInput, ReportUncheckedCreateWithoutReportedInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutReportedInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutReportedInput, ReportUncheckedUpdateWithoutReportedInput>
  }

  export type ReportUpdateManyWithWhereWithoutReportedInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutReportedInput>
  }

  export type MatchUpsertWithWhereUniqueWithoutUserAInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutUserAInput, MatchUncheckedUpdateWithoutUserAInput>
    create: XOR<MatchCreateWithoutUserAInput, MatchUncheckedCreateWithoutUserAInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutUserAInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutUserAInput, MatchUncheckedUpdateWithoutUserAInput>
  }

  export type MatchUpdateManyWithWhereWithoutUserAInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutUserAInput>
  }

  export type MatchScalarWhereInput = {
    AND?: MatchScalarWhereInput | MatchScalarWhereInput[]
    OR?: MatchScalarWhereInput[]
    NOT?: MatchScalarWhereInput | MatchScalarWhereInput[]
    id?: StringFilter<"Match"> | string
    userAId?: StringFilter<"Match"> | string
    userBId?: StringFilter<"Match"> | string
    mutual?: BoolFilter<"Match"> | boolean
    createdAt?: DateTimeFilter<"Match"> | Date | string
  }

  export type MatchUpsertWithWhereUniqueWithoutUserBInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutUserBInput, MatchUncheckedUpdateWithoutUserBInput>
    create: XOR<MatchCreateWithoutUserBInput, MatchUncheckedCreateWithoutUserBInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutUserBInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutUserBInput, MatchUncheckedUpdateWithoutUserBInput>
  }

  export type MatchUpdateManyWithWhereWithoutUserBInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutUserBInput>
  }

  export type ViewUpsertWithWhereUniqueWithoutUserAInput = {
    where: ViewWhereUniqueInput
    update: XOR<ViewUpdateWithoutUserAInput, ViewUncheckedUpdateWithoutUserAInput>
    create: XOR<ViewCreateWithoutUserAInput, ViewUncheckedCreateWithoutUserAInput>
  }

  export type ViewUpdateWithWhereUniqueWithoutUserAInput = {
    where: ViewWhereUniqueInput
    data: XOR<ViewUpdateWithoutUserAInput, ViewUncheckedUpdateWithoutUserAInput>
  }

  export type ViewUpdateManyWithWhereWithoutUserAInput = {
    where: ViewScalarWhereInput
    data: XOR<ViewUpdateManyMutationInput, ViewUncheckedUpdateManyWithoutUserAInput>
  }

  export type ViewScalarWhereInput = {
    AND?: ViewScalarWhereInput | ViewScalarWhereInput[]
    OR?: ViewScalarWhereInput[]
    NOT?: ViewScalarWhereInput | ViewScalarWhereInput[]
    id?: StringFilter<"View"> | string
    userAId?: StringFilter<"View"> | string
    userBId?: StringFilter<"View"> | string
    createdAt?: DateTimeFilter<"View"> | Date | string
  }

  export type ViewUpsertWithWhereUniqueWithoutUserBInput = {
    where: ViewWhereUniqueInput
    update: XOR<ViewUpdateWithoutUserBInput, ViewUncheckedUpdateWithoutUserBInput>
    create: XOR<ViewCreateWithoutUserBInput, ViewUncheckedCreateWithoutUserBInput>
  }

  export type ViewUpdateWithWhereUniqueWithoutUserBInput = {
    where: ViewWhereUniqueInput
    data: XOR<ViewUpdateWithoutUserBInput, ViewUncheckedUpdateWithoutUserBInput>
  }

  export type ViewUpdateManyWithWhereWithoutUserBInput = {
    where: ViewScalarWhereInput
    data: XOR<ViewUpdateManyMutationInput, ViewUncheckedUpdateManyWithoutUserBInput>
  }

  export type AdminUpsertWithWhereUniqueWithoutUserInput = {
    where: AdminWhereUniqueInput
    update: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
  }

  export type AdminUpdateWithWhereUniqueWithoutUserInput = {
    where: AdminWhereUniqueInput
    data: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
  }

  export type AdminUpdateManyWithWhereWithoutUserInput = {
    where: AdminScalarWhereInput
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyWithoutUserInput>
  }

  export type AdminScalarWhereInput = {
    AND?: AdminScalarWhereInput | AdminScalarWhereInput[]
    OR?: AdminScalarWhereInput[]
    NOT?: AdminScalarWhereInput | AdminScalarWhereInput[]
    id?: StringFilter<"Admin"> | string
    userId?: StringFilter<"Admin"> | string
  }

  export type UserCreateWithoutAdminInput = {
    id: string
    name: string
    description?: string | null
    avatarUrl?: string | null
    location: string
    personalityTags?: UserCreatepersonalityTagsInput | string[]
    workingStyle: $Enums.WorkingStyle
    collaborationPref: $Enums.CollaborationPref
    currentRole: string
    yearsExperience: number
    domainExpertise?: UserCreatedomainExpertiseInput | string[]
    skills?: UserCreateskillsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    pastProjects?: ProjectCreateNestedManyWithoutUserInput
    startupInfo?: StartupinfoCreateNestedOneWithoutUserInput
    contactInfo?: ContactInfoCreateNestedOneWithoutUserInput
    reportsFiled?: ReportCreateNestedManyWithoutReporterInput
    reportsReceived?: ReportCreateNestedManyWithoutReportedInput
    matchesInitiated?: MatchCreateNestedManyWithoutUserAInput
    matchesReceived?: MatchCreateNestedManyWithoutUserBInput
    viewsGiven?: ViewCreateNestedManyWithoutUserAInput
    viewsReceived?: ViewCreateNestedManyWithoutUserBInput
  }

  export type UserUncheckedCreateWithoutAdminInput = {
    id: string
    name: string
    description?: string | null
    avatarUrl?: string | null
    location: string
    personalityTags?: UserCreatepersonalityTagsInput | string[]
    workingStyle: $Enums.WorkingStyle
    collaborationPref: $Enums.CollaborationPref
    currentRole: string
    yearsExperience: number
    domainExpertise?: UserCreatedomainExpertiseInput | string[]
    skills?: UserCreateskillsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    pastProjects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    startupInfo?: StartupinfoUncheckedCreateNestedOneWithoutUserInput
    contactInfo?: ContactInfoUncheckedCreateNestedOneWithoutUserInput
    reportsFiled?: ReportUncheckedCreateNestedManyWithoutReporterInput
    reportsReceived?: ReportUncheckedCreateNestedManyWithoutReportedInput
    matchesInitiated?: MatchUncheckedCreateNestedManyWithoutUserAInput
    matchesReceived?: MatchUncheckedCreateNestedManyWithoutUserBInput
    viewsGiven?: ViewUncheckedCreateNestedManyWithoutUserAInput
    viewsReceived?: ViewUncheckedCreateNestedManyWithoutUserBInput
  }

  export type UserCreateOrConnectWithoutAdminInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
  }

  export type UserUpsertWithoutAdminInput = {
    update: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdminInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
  }

  export type UserUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    personalityTags?: UserUpdatepersonalityTagsInput | string[]
    workingStyle?: EnumWorkingStyleFieldUpdateOperationsInput | $Enums.WorkingStyle
    collaborationPref?: EnumCollaborationPrefFieldUpdateOperationsInput | $Enums.CollaborationPref
    currentRole?: StringFieldUpdateOperationsInput | string
    yearsExperience?: IntFieldUpdateOperationsInput | number
    domainExpertise?: UserUpdatedomainExpertiseInput | string[]
    skills?: UserUpdateskillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pastProjects?: ProjectUpdateManyWithoutUserNestedInput
    startupInfo?: StartupinfoUpdateOneWithoutUserNestedInput
    contactInfo?: ContactInfoUpdateOneWithoutUserNestedInput
    reportsFiled?: ReportUpdateManyWithoutReporterNestedInput
    reportsReceived?: ReportUpdateManyWithoutReportedNestedInput
    matchesInitiated?: MatchUpdateManyWithoutUserANestedInput
    matchesReceived?: MatchUpdateManyWithoutUserBNestedInput
    viewsGiven?: ViewUpdateManyWithoutUserANestedInput
    viewsReceived?: ViewUpdateManyWithoutUserBNestedInput
  }

  export type UserUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    personalityTags?: UserUpdatepersonalityTagsInput | string[]
    workingStyle?: EnumWorkingStyleFieldUpdateOperationsInput | $Enums.WorkingStyle
    collaborationPref?: EnumCollaborationPrefFieldUpdateOperationsInput | $Enums.CollaborationPref
    currentRole?: StringFieldUpdateOperationsInput | string
    yearsExperience?: IntFieldUpdateOperationsInput | number
    domainExpertise?: UserUpdatedomainExpertiseInput | string[]
    skills?: UserUpdateskillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pastProjects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    startupInfo?: StartupinfoUncheckedUpdateOneWithoutUserNestedInput
    contactInfo?: ContactInfoUncheckedUpdateOneWithoutUserNestedInput
    reportsFiled?: ReportUncheckedUpdateManyWithoutReporterNestedInput
    reportsReceived?: ReportUncheckedUpdateManyWithoutReportedNestedInput
    matchesInitiated?: MatchUncheckedUpdateManyWithoutUserANestedInput
    matchesReceived?: MatchUncheckedUpdateManyWithoutUserBNestedInput
    viewsGiven?: ViewUncheckedUpdateManyWithoutUserANestedInput
    viewsReceived?: ViewUncheckedUpdateManyWithoutUserBNestedInput
  }

  export type UserCreateWithoutStartupInfoInput = {
    id: string
    name: string
    description?: string | null
    avatarUrl?: string | null
    location: string
    personalityTags?: UserCreatepersonalityTagsInput | string[]
    workingStyle: $Enums.WorkingStyle
    collaborationPref: $Enums.CollaborationPref
    currentRole: string
    yearsExperience: number
    domainExpertise?: UserCreatedomainExpertiseInput | string[]
    skills?: UserCreateskillsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    pastProjects?: ProjectCreateNestedManyWithoutUserInput
    contactInfo?: ContactInfoCreateNestedOneWithoutUserInput
    reportsFiled?: ReportCreateNestedManyWithoutReporterInput
    reportsReceived?: ReportCreateNestedManyWithoutReportedInput
    matchesInitiated?: MatchCreateNestedManyWithoutUserAInput
    matchesReceived?: MatchCreateNestedManyWithoutUserBInput
    viewsGiven?: ViewCreateNestedManyWithoutUserAInput
    viewsReceived?: ViewCreateNestedManyWithoutUserBInput
    Admin?: AdminCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStartupInfoInput = {
    id: string
    name: string
    description?: string | null
    avatarUrl?: string | null
    location: string
    personalityTags?: UserCreatepersonalityTagsInput | string[]
    workingStyle: $Enums.WorkingStyle
    collaborationPref: $Enums.CollaborationPref
    currentRole: string
    yearsExperience: number
    domainExpertise?: UserCreatedomainExpertiseInput | string[]
    skills?: UserCreateskillsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    pastProjects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    contactInfo?: ContactInfoUncheckedCreateNestedOneWithoutUserInput
    reportsFiled?: ReportUncheckedCreateNestedManyWithoutReporterInput
    reportsReceived?: ReportUncheckedCreateNestedManyWithoutReportedInput
    matchesInitiated?: MatchUncheckedCreateNestedManyWithoutUserAInput
    matchesReceived?: MatchUncheckedCreateNestedManyWithoutUserBInput
    viewsGiven?: ViewUncheckedCreateNestedManyWithoutUserAInput
    viewsReceived?: ViewUncheckedCreateNestedManyWithoutUserBInput
    Admin?: AdminUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStartupInfoInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStartupInfoInput, UserUncheckedCreateWithoutStartupInfoInput>
  }

  export type UserUpsertWithoutStartupInfoInput = {
    update: XOR<UserUpdateWithoutStartupInfoInput, UserUncheckedUpdateWithoutStartupInfoInput>
    create: XOR<UserCreateWithoutStartupInfoInput, UserUncheckedCreateWithoutStartupInfoInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStartupInfoInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStartupInfoInput, UserUncheckedUpdateWithoutStartupInfoInput>
  }

  export type UserUpdateWithoutStartupInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    personalityTags?: UserUpdatepersonalityTagsInput | string[]
    workingStyle?: EnumWorkingStyleFieldUpdateOperationsInput | $Enums.WorkingStyle
    collaborationPref?: EnumCollaborationPrefFieldUpdateOperationsInput | $Enums.CollaborationPref
    currentRole?: StringFieldUpdateOperationsInput | string
    yearsExperience?: IntFieldUpdateOperationsInput | number
    domainExpertise?: UserUpdatedomainExpertiseInput | string[]
    skills?: UserUpdateskillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pastProjects?: ProjectUpdateManyWithoutUserNestedInput
    contactInfo?: ContactInfoUpdateOneWithoutUserNestedInput
    reportsFiled?: ReportUpdateManyWithoutReporterNestedInput
    reportsReceived?: ReportUpdateManyWithoutReportedNestedInput
    matchesInitiated?: MatchUpdateManyWithoutUserANestedInput
    matchesReceived?: MatchUpdateManyWithoutUserBNestedInput
    viewsGiven?: ViewUpdateManyWithoutUserANestedInput
    viewsReceived?: ViewUpdateManyWithoutUserBNestedInput
    Admin?: AdminUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStartupInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    personalityTags?: UserUpdatepersonalityTagsInput | string[]
    workingStyle?: EnumWorkingStyleFieldUpdateOperationsInput | $Enums.WorkingStyle
    collaborationPref?: EnumCollaborationPrefFieldUpdateOperationsInput | $Enums.CollaborationPref
    currentRole?: StringFieldUpdateOperationsInput | string
    yearsExperience?: IntFieldUpdateOperationsInput | number
    domainExpertise?: UserUpdatedomainExpertiseInput | string[]
    skills?: UserUpdateskillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pastProjects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    contactInfo?: ContactInfoUncheckedUpdateOneWithoutUserNestedInput
    reportsFiled?: ReportUncheckedUpdateManyWithoutReporterNestedInput
    reportsReceived?: ReportUncheckedUpdateManyWithoutReportedNestedInput
    matchesInitiated?: MatchUncheckedUpdateManyWithoutUserANestedInput
    matchesReceived?: MatchUncheckedUpdateManyWithoutUserBNestedInput
    viewsGiven?: ViewUncheckedUpdateManyWithoutUserANestedInput
    viewsReceived?: ViewUncheckedUpdateManyWithoutUserBNestedInput
    Admin?: AdminUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutContactInfoInput = {
    id: string
    name: string
    description?: string | null
    avatarUrl?: string | null
    location: string
    personalityTags?: UserCreatepersonalityTagsInput | string[]
    workingStyle: $Enums.WorkingStyle
    collaborationPref: $Enums.CollaborationPref
    currentRole: string
    yearsExperience: number
    domainExpertise?: UserCreatedomainExpertiseInput | string[]
    skills?: UserCreateskillsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    pastProjects?: ProjectCreateNestedManyWithoutUserInput
    startupInfo?: StartupinfoCreateNestedOneWithoutUserInput
    reportsFiled?: ReportCreateNestedManyWithoutReporterInput
    reportsReceived?: ReportCreateNestedManyWithoutReportedInput
    matchesInitiated?: MatchCreateNestedManyWithoutUserAInput
    matchesReceived?: MatchCreateNestedManyWithoutUserBInput
    viewsGiven?: ViewCreateNestedManyWithoutUserAInput
    viewsReceived?: ViewCreateNestedManyWithoutUserBInput
    Admin?: AdminCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutContactInfoInput = {
    id: string
    name: string
    description?: string | null
    avatarUrl?: string | null
    location: string
    personalityTags?: UserCreatepersonalityTagsInput | string[]
    workingStyle: $Enums.WorkingStyle
    collaborationPref: $Enums.CollaborationPref
    currentRole: string
    yearsExperience: number
    domainExpertise?: UserCreatedomainExpertiseInput | string[]
    skills?: UserCreateskillsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    pastProjects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    startupInfo?: StartupinfoUncheckedCreateNestedOneWithoutUserInput
    reportsFiled?: ReportUncheckedCreateNestedManyWithoutReporterInput
    reportsReceived?: ReportUncheckedCreateNestedManyWithoutReportedInput
    matchesInitiated?: MatchUncheckedCreateNestedManyWithoutUserAInput
    matchesReceived?: MatchUncheckedCreateNestedManyWithoutUserBInput
    viewsGiven?: ViewUncheckedCreateNestedManyWithoutUserAInput
    viewsReceived?: ViewUncheckedCreateNestedManyWithoutUserBInput
    Admin?: AdminUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutContactInfoInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContactInfoInput, UserUncheckedCreateWithoutContactInfoInput>
  }

  export type UserUpsertWithoutContactInfoInput = {
    update: XOR<UserUpdateWithoutContactInfoInput, UserUncheckedUpdateWithoutContactInfoInput>
    create: XOR<UserCreateWithoutContactInfoInput, UserUncheckedCreateWithoutContactInfoInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContactInfoInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContactInfoInput, UserUncheckedUpdateWithoutContactInfoInput>
  }

  export type UserUpdateWithoutContactInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    personalityTags?: UserUpdatepersonalityTagsInput | string[]
    workingStyle?: EnumWorkingStyleFieldUpdateOperationsInput | $Enums.WorkingStyle
    collaborationPref?: EnumCollaborationPrefFieldUpdateOperationsInput | $Enums.CollaborationPref
    currentRole?: StringFieldUpdateOperationsInput | string
    yearsExperience?: IntFieldUpdateOperationsInput | number
    domainExpertise?: UserUpdatedomainExpertiseInput | string[]
    skills?: UserUpdateskillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pastProjects?: ProjectUpdateManyWithoutUserNestedInput
    startupInfo?: StartupinfoUpdateOneWithoutUserNestedInput
    reportsFiled?: ReportUpdateManyWithoutReporterNestedInput
    reportsReceived?: ReportUpdateManyWithoutReportedNestedInput
    matchesInitiated?: MatchUpdateManyWithoutUserANestedInput
    matchesReceived?: MatchUpdateManyWithoutUserBNestedInput
    viewsGiven?: ViewUpdateManyWithoutUserANestedInput
    viewsReceived?: ViewUpdateManyWithoutUserBNestedInput
    Admin?: AdminUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutContactInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    personalityTags?: UserUpdatepersonalityTagsInput | string[]
    workingStyle?: EnumWorkingStyleFieldUpdateOperationsInput | $Enums.WorkingStyle
    collaborationPref?: EnumCollaborationPrefFieldUpdateOperationsInput | $Enums.CollaborationPref
    currentRole?: StringFieldUpdateOperationsInput | string
    yearsExperience?: IntFieldUpdateOperationsInput | number
    domainExpertise?: UserUpdatedomainExpertiseInput | string[]
    skills?: UserUpdateskillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pastProjects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    startupInfo?: StartupinfoUncheckedUpdateOneWithoutUserNestedInput
    reportsFiled?: ReportUncheckedUpdateManyWithoutReporterNestedInput
    reportsReceived?: ReportUncheckedUpdateManyWithoutReportedNestedInput
    matchesInitiated?: MatchUncheckedUpdateManyWithoutUserANestedInput
    matchesReceived?: MatchUncheckedUpdateManyWithoutUserBNestedInput
    viewsGiven?: ViewUncheckedUpdateManyWithoutUserANestedInput
    viewsReceived?: ViewUncheckedUpdateManyWithoutUserBNestedInput
    Admin?: AdminUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPastProjectsInput = {
    id: string
    name: string
    description?: string | null
    avatarUrl?: string | null
    location: string
    personalityTags?: UserCreatepersonalityTagsInput | string[]
    workingStyle: $Enums.WorkingStyle
    collaborationPref: $Enums.CollaborationPref
    currentRole: string
    yearsExperience: number
    domainExpertise?: UserCreatedomainExpertiseInput | string[]
    skills?: UserCreateskillsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    startupInfo?: StartupinfoCreateNestedOneWithoutUserInput
    contactInfo?: ContactInfoCreateNestedOneWithoutUserInput
    reportsFiled?: ReportCreateNestedManyWithoutReporterInput
    reportsReceived?: ReportCreateNestedManyWithoutReportedInput
    matchesInitiated?: MatchCreateNestedManyWithoutUserAInput
    matchesReceived?: MatchCreateNestedManyWithoutUserBInput
    viewsGiven?: ViewCreateNestedManyWithoutUserAInput
    viewsReceived?: ViewCreateNestedManyWithoutUserBInput
    Admin?: AdminCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPastProjectsInput = {
    id: string
    name: string
    description?: string | null
    avatarUrl?: string | null
    location: string
    personalityTags?: UserCreatepersonalityTagsInput | string[]
    workingStyle: $Enums.WorkingStyle
    collaborationPref: $Enums.CollaborationPref
    currentRole: string
    yearsExperience: number
    domainExpertise?: UserCreatedomainExpertiseInput | string[]
    skills?: UserCreateskillsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    startupInfo?: StartupinfoUncheckedCreateNestedOneWithoutUserInput
    contactInfo?: ContactInfoUncheckedCreateNestedOneWithoutUserInput
    reportsFiled?: ReportUncheckedCreateNestedManyWithoutReporterInput
    reportsReceived?: ReportUncheckedCreateNestedManyWithoutReportedInput
    matchesInitiated?: MatchUncheckedCreateNestedManyWithoutUserAInput
    matchesReceived?: MatchUncheckedCreateNestedManyWithoutUserBInput
    viewsGiven?: ViewUncheckedCreateNestedManyWithoutUserAInput
    viewsReceived?: ViewUncheckedCreateNestedManyWithoutUserBInput
    Admin?: AdminUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPastProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPastProjectsInput, UserUncheckedCreateWithoutPastProjectsInput>
  }

  export type UserUpsertWithoutPastProjectsInput = {
    update: XOR<UserUpdateWithoutPastProjectsInput, UserUncheckedUpdateWithoutPastProjectsInput>
    create: XOR<UserCreateWithoutPastProjectsInput, UserUncheckedCreateWithoutPastProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPastProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPastProjectsInput, UserUncheckedUpdateWithoutPastProjectsInput>
  }

  export type UserUpdateWithoutPastProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    personalityTags?: UserUpdatepersonalityTagsInput | string[]
    workingStyle?: EnumWorkingStyleFieldUpdateOperationsInput | $Enums.WorkingStyle
    collaborationPref?: EnumCollaborationPrefFieldUpdateOperationsInput | $Enums.CollaborationPref
    currentRole?: StringFieldUpdateOperationsInput | string
    yearsExperience?: IntFieldUpdateOperationsInput | number
    domainExpertise?: UserUpdatedomainExpertiseInput | string[]
    skills?: UserUpdateskillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startupInfo?: StartupinfoUpdateOneWithoutUserNestedInput
    contactInfo?: ContactInfoUpdateOneWithoutUserNestedInput
    reportsFiled?: ReportUpdateManyWithoutReporterNestedInput
    reportsReceived?: ReportUpdateManyWithoutReportedNestedInput
    matchesInitiated?: MatchUpdateManyWithoutUserANestedInput
    matchesReceived?: MatchUpdateManyWithoutUserBNestedInput
    viewsGiven?: ViewUpdateManyWithoutUserANestedInput
    viewsReceived?: ViewUpdateManyWithoutUserBNestedInput
    Admin?: AdminUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPastProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    personalityTags?: UserUpdatepersonalityTagsInput | string[]
    workingStyle?: EnumWorkingStyleFieldUpdateOperationsInput | $Enums.WorkingStyle
    collaborationPref?: EnumCollaborationPrefFieldUpdateOperationsInput | $Enums.CollaborationPref
    currentRole?: StringFieldUpdateOperationsInput | string
    yearsExperience?: IntFieldUpdateOperationsInput | number
    domainExpertise?: UserUpdatedomainExpertiseInput | string[]
    skills?: UserUpdateskillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startupInfo?: StartupinfoUncheckedUpdateOneWithoutUserNestedInput
    contactInfo?: ContactInfoUncheckedUpdateOneWithoutUserNestedInput
    reportsFiled?: ReportUncheckedUpdateManyWithoutReporterNestedInput
    reportsReceived?: ReportUncheckedUpdateManyWithoutReportedNestedInput
    matchesInitiated?: MatchUncheckedUpdateManyWithoutUserANestedInput
    matchesReceived?: MatchUncheckedUpdateManyWithoutUserBNestedInput
    viewsGiven?: ViewUncheckedUpdateManyWithoutUserANestedInput
    viewsReceived?: ViewUncheckedUpdateManyWithoutUserBNestedInput
    Admin?: AdminUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutReportsReceivedInput = {
    id: string
    name: string
    description?: string | null
    avatarUrl?: string | null
    location: string
    personalityTags?: UserCreatepersonalityTagsInput | string[]
    workingStyle: $Enums.WorkingStyle
    collaborationPref: $Enums.CollaborationPref
    currentRole: string
    yearsExperience: number
    domainExpertise?: UserCreatedomainExpertiseInput | string[]
    skills?: UserCreateskillsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    pastProjects?: ProjectCreateNestedManyWithoutUserInput
    startupInfo?: StartupinfoCreateNestedOneWithoutUserInput
    contactInfo?: ContactInfoCreateNestedOneWithoutUserInput
    reportsFiled?: ReportCreateNestedManyWithoutReporterInput
    matchesInitiated?: MatchCreateNestedManyWithoutUserAInput
    matchesReceived?: MatchCreateNestedManyWithoutUserBInput
    viewsGiven?: ViewCreateNestedManyWithoutUserAInput
    viewsReceived?: ViewCreateNestedManyWithoutUserBInput
    Admin?: AdminCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReportsReceivedInput = {
    id: string
    name: string
    description?: string | null
    avatarUrl?: string | null
    location: string
    personalityTags?: UserCreatepersonalityTagsInput | string[]
    workingStyle: $Enums.WorkingStyle
    collaborationPref: $Enums.CollaborationPref
    currentRole: string
    yearsExperience: number
    domainExpertise?: UserCreatedomainExpertiseInput | string[]
    skills?: UserCreateskillsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    pastProjects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    startupInfo?: StartupinfoUncheckedCreateNestedOneWithoutUserInput
    contactInfo?: ContactInfoUncheckedCreateNestedOneWithoutUserInput
    reportsFiled?: ReportUncheckedCreateNestedManyWithoutReporterInput
    matchesInitiated?: MatchUncheckedCreateNestedManyWithoutUserAInput
    matchesReceived?: MatchUncheckedCreateNestedManyWithoutUserBInput
    viewsGiven?: ViewUncheckedCreateNestedManyWithoutUserAInput
    viewsReceived?: ViewUncheckedCreateNestedManyWithoutUserBInput
    Admin?: AdminUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReportsReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReportsReceivedInput, UserUncheckedCreateWithoutReportsReceivedInput>
  }

  export type UserCreateWithoutReportsFiledInput = {
    id: string
    name: string
    description?: string | null
    avatarUrl?: string | null
    location: string
    personalityTags?: UserCreatepersonalityTagsInput | string[]
    workingStyle: $Enums.WorkingStyle
    collaborationPref: $Enums.CollaborationPref
    currentRole: string
    yearsExperience: number
    domainExpertise?: UserCreatedomainExpertiseInput | string[]
    skills?: UserCreateskillsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    pastProjects?: ProjectCreateNestedManyWithoutUserInput
    startupInfo?: StartupinfoCreateNestedOneWithoutUserInput
    contactInfo?: ContactInfoCreateNestedOneWithoutUserInput
    reportsReceived?: ReportCreateNestedManyWithoutReportedInput
    matchesInitiated?: MatchCreateNestedManyWithoutUserAInput
    matchesReceived?: MatchCreateNestedManyWithoutUserBInput
    viewsGiven?: ViewCreateNestedManyWithoutUserAInput
    viewsReceived?: ViewCreateNestedManyWithoutUserBInput
    Admin?: AdminCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReportsFiledInput = {
    id: string
    name: string
    description?: string | null
    avatarUrl?: string | null
    location: string
    personalityTags?: UserCreatepersonalityTagsInput | string[]
    workingStyle: $Enums.WorkingStyle
    collaborationPref: $Enums.CollaborationPref
    currentRole: string
    yearsExperience: number
    domainExpertise?: UserCreatedomainExpertiseInput | string[]
    skills?: UserCreateskillsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    pastProjects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    startupInfo?: StartupinfoUncheckedCreateNestedOneWithoutUserInput
    contactInfo?: ContactInfoUncheckedCreateNestedOneWithoutUserInput
    reportsReceived?: ReportUncheckedCreateNestedManyWithoutReportedInput
    matchesInitiated?: MatchUncheckedCreateNestedManyWithoutUserAInput
    matchesReceived?: MatchUncheckedCreateNestedManyWithoutUserBInput
    viewsGiven?: ViewUncheckedCreateNestedManyWithoutUserAInput
    viewsReceived?: ViewUncheckedCreateNestedManyWithoutUserBInput
    Admin?: AdminUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReportsFiledInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReportsFiledInput, UserUncheckedCreateWithoutReportsFiledInput>
  }

  export type UserUpsertWithoutReportsReceivedInput = {
    update: XOR<UserUpdateWithoutReportsReceivedInput, UserUncheckedUpdateWithoutReportsReceivedInput>
    create: XOR<UserCreateWithoutReportsReceivedInput, UserUncheckedCreateWithoutReportsReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReportsReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReportsReceivedInput, UserUncheckedUpdateWithoutReportsReceivedInput>
  }

  export type UserUpdateWithoutReportsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    personalityTags?: UserUpdatepersonalityTagsInput | string[]
    workingStyle?: EnumWorkingStyleFieldUpdateOperationsInput | $Enums.WorkingStyle
    collaborationPref?: EnumCollaborationPrefFieldUpdateOperationsInput | $Enums.CollaborationPref
    currentRole?: StringFieldUpdateOperationsInput | string
    yearsExperience?: IntFieldUpdateOperationsInput | number
    domainExpertise?: UserUpdatedomainExpertiseInput | string[]
    skills?: UserUpdateskillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pastProjects?: ProjectUpdateManyWithoutUserNestedInput
    startupInfo?: StartupinfoUpdateOneWithoutUserNestedInput
    contactInfo?: ContactInfoUpdateOneWithoutUserNestedInput
    reportsFiled?: ReportUpdateManyWithoutReporterNestedInput
    matchesInitiated?: MatchUpdateManyWithoutUserANestedInput
    matchesReceived?: MatchUpdateManyWithoutUserBNestedInput
    viewsGiven?: ViewUpdateManyWithoutUserANestedInput
    viewsReceived?: ViewUpdateManyWithoutUserBNestedInput
    Admin?: AdminUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReportsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    personalityTags?: UserUpdatepersonalityTagsInput | string[]
    workingStyle?: EnumWorkingStyleFieldUpdateOperationsInput | $Enums.WorkingStyle
    collaborationPref?: EnumCollaborationPrefFieldUpdateOperationsInput | $Enums.CollaborationPref
    currentRole?: StringFieldUpdateOperationsInput | string
    yearsExperience?: IntFieldUpdateOperationsInput | number
    domainExpertise?: UserUpdatedomainExpertiseInput | string[]
    skills?: UserUpdateskillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pastProjects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    startupInfo?: StartupinfoUncheckedUpdateOneWithoutUserNestedInput
    contactInfo?: ContactInfoUncheckedUpdateOneWithoutUserNestedInput
    reportsFiled?: ReportUncheckedUpdateManyWithoutReporterNestedInput
    matchesInitiated?: MatchUncheckedUpdateManyWithoutUserANestedInput
    matchesReceived?: MatchUncheckedUpdateManyWithoutUserBNestedInput
    viewsGiven?: ViewUncheckedUpdateManyWithoutUserANestedInput
    viewsReceived?: ViewUncheckedUpdateManyWithoutUserBNestedInput
    Admin?: AdminUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutReportsFiledInput = {
    update: XOR<UserUpdateWithoutReportsFiledInput, UserUncheckedUpdateWithoutReportsFiledInput>
    create: XOR<UserCreateWithoutReportsFiledInput, UserUncheckedCreateWithoutReportsFiledInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReportsFiledInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReportsFiledInput, UserUncheckedUpdateWithoutReportsFiledInput>
  }

  export type UserUpdateWithoutReportsFiledInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    personalityTags?: UserUpdatepersonalityTagsInput | string[]
    workingStyle?: EnumWorkingStyleFieldUpdateOperationsInput | $Enums.WorkingStyle
    collaborationPref?: EnumCollaborationPrefFieldUpdateOperationsInput | $Enums.CollaborationPref
    currentRole?: StringFieldUpdateOperationsInput | string
    yearsExperience?: IntFieldUpdateOperationsInput | number
    domainExpertise?: UserUpdatedomainExpertiseInput | string[]
    skills?: UserUpdateskillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pastProjects?: ProjectUpdateManyWithoutUserNestedInput
    startupInfo?: StartupinfoUpdateOneWithoutUserNestedInput
    contactInfo?: ContactInfoUpdateOneWithoutUserNestedInput
    reportsReceived?: ReportUpdateManyWithoutReportedNestedInput
    matchesInitiated?: MatchUpdateManyWithoutUserANestedInput
    matchesReceived?: MatchUpdateManyWithoutUserBNestedInput
    viewsGiven?: ViewUpdateManyWithoutUserANestedInput
    viewsReceived?: ViewUpdateManyWithoutUserBNestedInput
    Admin?: AdminUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReportsFiledInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    personalityTags?: UserUpdatepersonalityTagsInput | string[]
    workingStyle?: EnumWorkingStyleFieldUpdateOperationsInput | $Enums.WorkingStyle
    collaborationPref?: EnumCollaborationPrefFieldUpdateOperationsInput | $Enums.CollaborationPref
    currentRole?: StringFieldUpdateOperationsInput | string
    yearsExperience?: IntFieldUpdateOperationsInput | number
    domainExpertise?: UserUpdatedomainExpertiseInput | string[]
    skills?: UserUpdateskillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pastProjects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    startupInfo?: StartupinfoUncheckedUpdateOneWithoutUserNestedInput
    contactInfo?: ContactInfoUncheckedUpdateOneWithoutUserNestedInput
    reportsReceived?: ReportUncheckedUpdateManyWithoutReportedNestedInput
    matchesInitiated?: MatchUncheckedUpdateManyWithoutUserANestedInput
    matchesReceived?: MatchUncheckedUpdateManyWithoutUserBNestedInput
    viewsGiven?: ViewUncheckedUpdateManyWithoutUserANestedInput
    viewsReceived?: ViewUncheckedUpdateManyWithoutUserBNestedInput
    Admin?: AdminUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutMatchesInitiatedInput = {
    id: string
    name: string
    description?: string | null
    avatarUrl?: string | null
    location: string
    personalityTags?: UserCreatepersonalityTagsInput | string[]
    workingStyle: $Enums.WorkingStyle
    collaborationPref: $Enums.CollaborationPref
    currentRole: string
    yearsExperience: number
    domainExpertise?: UserCreatedomainExpertiseInput | string[]
    skills?: UserCreateskillsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    pastProjects?: ProjectCreateNestedManyWithoutUserInput
    startupInfo?: StartupinfoCreateNestedOneWithoutUserInput
    contactInfo?: ContactInfoCreateNestedOneWithoutUserInput
    reportsFiled?: ReportCreateNestedManyWithoutReporterInput
    reportsReceived?: ReportCreateNestedManyWithoutReportedInput
    matchesReceived?: MatchCreateNestedManyWithoutUserBInput
    viewsGiven?: ViewCreateNestedManyWithoutUserAInput
    viewsReceived?: ViewCreateNestedManyWithoutUserBInput
    Admin?: AdminCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMatchesInitiatedInput = {
    id: string
    name: string
    description?: string | null
    avatarUrl?: string | null
    location: string
    personalityTags?: UserCreatepersonalityTagsInput | string[]
    workingStyle: $Enums.WorkingStyle
    collaborationPref: $Enums.CollaborationPref
    currentRole: string
    yearsExperience: number
    domainExpertise?: UserCreatedomainExpertiseInput | string[]
    skills?: UserCreateskillsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    pastProjects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    startupInfo?: StartupinfoUncheckedCreateNestedOneWithoutUserInput
    contactInfo?: ContactInfoUncheckedCreateNestedOneWithoutUserInput
    reportsFiled?: ReportUncheckedCreateNestedManyWithoutReporterInput
    reportsReceived?: ReportUncheckedCreateNestedManyWithoutReportedInput
    matchesReceived?: MatchUncheckedCreateNestedManyWithoutUserBInput
    viewsGiven?: ViewUncheckedCreateNestedManyWithoutUserAInput
    viewsReceived?: ViewUncheckedCreateNestedManyWithoutUserBInput
    Admin?: AdminUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMatchesInitiatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatchesInitiatedInput, UserUncheckedCreateWithoutMatchesInitiatedInput>
  }

  export type UserCreateWithoutMatchesReceivedInput = {
    id: string
    name: string
    description?: string | null
    avatarUrl?: string | null
    location: string
    personalityTags?: UserCreatepersonalityTagsInput | string[]
    workingStyle: $Enums.WorkingStyle
    collaborationPref: $Enums.CollaborationPref
    currentRole: string
    yearsExperience: number
    domainExpertise?: UserCreatedomainExpertiseInput | string[]
    skills?: UserCreateskillsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    pastProjects?: ProjectCreateNestedManyWithoutUserInput
    startupInfo?: StartupinfoCreateNestedOneWithoutUserInput
    contactInfo?: ContactInfoCreateNestedOneWithoutUserInput
    reportsFiled?: ReportCreateNestedManyWithoutReporterInput
    reportsReceived?: ReportCreateNestedManyWithoutReportedInput
    matchesInitiated?: MatchCreateNestedManyWithoutUserAInput
    viewsGiven?: ViewCreateNestedManyWithoutUserAInput
    viewsReceived?: ViewCreateNestedManyWithoutUserBInput
    Admin?: AdminCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMatchesReceivedInput = {
    id: string
    name: string
    description?: string | null
    avatarUrl?: string | null
    location: string
    personalityTags?: UserCreatepersonalityTagsInput | string[]
    workingStyle: $Enums.WorkingStyle
    collaborationPref: $Enums.CollaborationPref
    currentRole: string
    yearsExperience: number
    domainExpertise?: UserCreatedomainExpertiseInput | string[]
    skills?: UserCreateskillsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    pastProjects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    startupInfo?: StartupinfoUncheckedCreateNestedOneWithoutUserInput
    contactInfo?: ContactInfoUncheckedCreateNestedOneWithoutUserInput
    reportsFiled?: ReportUncheckedCreateNestedManyWithoutReporterInput
    reportsReceived?: ReportUncheckedCreateNestedManyWithoutReportedInput
    matchesInitiated?: MatchUncheckedCreateNestedManyWithoutUserAInput
    viewsGiven?: ViewUncheckedCreateNestedManyWithoutUserAInput
    viewsReceived?: ViewUncheckedCreateNestedManyWithoutUserBInput
    Admin?: AdminUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMatchesReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatchesReceivedInput, UserUncheckedCreateWithoutMatchesReceivedInput>
  }

  export type UserUpsertWithoutMatchesInitiatedInput = {
    update: XOR<UserUpdateWithoutMatchesInitiatedInput, UserUncheckedUpdateWithoutMatchesInitiatedInput>
    create: XOR<UserCreateWithoutMatchesInitiatedInput, UserUncheckedCreateWithoutMatchesInitiatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatchesInitiatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatchesInitiatedInput, UserUncheckedUpdateWithoutMatchesInitiatedInput>
  }

  export type UserUpdateWithoutMatchesInitiatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    personalityTags?: UserUpdatepersonalityTagsInput | string[]
    workingStyle?: EnumWorkingStyleFieldUpdateOperationsInput | $Enums.WorkingStyle
    collaborationPref?: EnumCollaborationPrefFieldUpdateOperationsInput | $Enums.CollaborationPref
    currentRole?: StringFieldUpdateOperationsInput | string
    yearsExperience?: IntFieldUpdateOperationsInput | number
    domainExpertise?: UserUpdatedomainExpertiseInput | string[]
    skills?: UserUpdateskillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pastProjects?: ProjectUpdateManyWithoutUserNestedInput
    startupInfo?: StartupinfoUpdateOneWithoutUserNestedInput
    contactInfo?: ContactInfoUpdateOneWithoutUserNestedInput
    reportsFiled?: ReportUpdateManyWithoutReporterNestedInput
    reportsReceived?: ReportUpdateManyWithoutReportedNestedInput
    matchesReceived?: MatchUpdateManyWithoutUserBNestedInput
    viewsGiven?: ViewUpdateManyWithoutUserANestedInput
    viewsReceived?: ViewUpdateManyWithoutUserBNestedInput
    Admin?: AdminUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMatchesInitiatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    personalityTags?: UserUpdatepersonalityTagsInput | string[]
    workingStyle?: EnumWorkingStyleFieldUpdateOperationsInput | $Enums.WorkingStyle
    collaborationPref?: EnumCollaborationPrefFieldUpdateOperationsInput | $Enums.CollaborationPref
    currentRole?: StringFieldUpdateOperationsInput | string
    yearsExperience?: IntFieldUpdateOperationsInput | number
    domainExpertise?: UserUpdatedomainExpertiseInput | string[]
    skills?: UserUpdateskillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pastProjects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    startupInfo?: StartupinfoUncheckedUpdateOneWithoutUserNestedInput
    contactInfo?: ContactInfoUncheckedUpdateOneWithoutUserNestedInput
    reportsFiled?: ReportUncheckedUpdateManyWithoutReporterNestedInput
    reportsReceived?: ReportUncheckedUpdateManyWithoutReportedNestedInput
    matchesReceived?: MatchUncheckedUpdateManyWithoutUserBNestedInput
    viewsGiven?: ViewUncheckedUpdateManyWithoutUserANestedInput
    viewsReceived?: ViewUncheckedUpdateManyWithoutUserBNestedInput
    Admin?: AdminUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutMatchesReceivedInput = {
    update: XOR<UserUpdateWithoutMatchesReceivedInput, UserUncheckedUpdateWithoutMatchesReceivedInput>
    create: XOR<UserCreateWithoutMatchesReceivedInput, UserUncheckedCreateWithoutMatchesReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatchesReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatchesReceivedInput, UserUncheckedUpdateWithoutMatchesReceivedInput>
  }

  export type UserUpdateWithoutMatchesReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    personalityTags?: UserUpdatepersonalityTagsInput | string[]
    workingStyle?: EnumWorkingStyleFieldUpdateOperationsInput | $Enums.WorkingStyle
    collaborationPref?: EnumCollaborationPrefFieldUpdateOperationsInput | $Enums.CollaborationPref
    currentRole?: StringFieldUpdateOperationsInput | string
    yearsExperience?: IntFieldUpdateOperationsInput | number
    domainExpertise?: UserUpdatedomainExpertiseInput | string[]
    skills?: UserUpdateskillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pastProjects?: ProjectUpdateManyWithoutUserNestedInput
    startupInfo?: StartupinfoUpdateOneWithoutUserNestedInput
    contactInfo?: ContactInfoUpdateOneWithoutUserNestedInput
    reportsFiled?: ReportUpdateManyWithoutReporterNestedInput
    reportsReceived?: ReportUpdateManyWithoutReportedNestedInput
    matchesInitiated?: MatchUpdateManyWithoutUserANestedInput
    viewsGiven?: ViewUpdateManyWithoutUserANestedInput
    viewsReceived?: ViewUpdateManyWithoutUserBNestedInput
    Admin?: AdminUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMatchesReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    personalityTags?: UserUpdatepersonalityTagsInput | string[]
    workingStyle?: EnumWorkingStyleFieldUpdateOperationsInput | $Enums.WorkingStyle
    collaborationPref?: EnumCollaborationPrefFieldUpdateOperationsInput | $Enums.CollaborationPref
    currentRole?: StringFieldUpdateOperationsInput | string
    yearsExperience?: IntFieldUpdateOperationsInput | number
    domainExpertise?: UserUpdatedomainExpertiseInput | string[]
    skills?: UserUpdateskillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pastProjects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    startupInfo?: StartupinfoUncheckedUpdateOneWithoutUserNestedInput
    contactInfo?: ContactInfoUncheckedUpdateOneWithoutUserNestedInput
    reportsFiled?: ReportUncheckedUpdateManyWithoutReporterNestedInput
    reportsReceived?: ReportUncheckedUpdateManyWithoutReportedNestedInput
    matchesInitiated?: MatchUncheckedUpdateManyWithoutUserANestedInput
    viewsGiven?: ViewUncheckedUpdateManyWithoutUserANestedInput
    viewsReceived?: ViewUncheckedUpdateManyWithoutUserBNestedInput
    Admin?: AdminUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutViewsGivenInput = {
    id: string
    name: string
    description?: string | null
    avatarUrl?: string | null
    location: string
    personalityTags?: UserCreatepersonalityTagsInput | string[]
    workingStyle: $Enums.WorkingStyle
    collaborationPref: $Enums.CollaborationPref
    currentRole: string
    yearsExperience: number
    domainExpertise?: UserCreatedomainExpertiseInput | string[]
    skills?: UserCreateskillsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    pastProjects?: ProjectCreateNestedManyWithoutUserInput
    startupInfo?: StartupinfoCreateNestedOneWithoutUserInput
    contactInfo?: ContactInfoCreateNestedOneWithoutUserInput
    reportsFiled?: ReportCreateNestedManyWithoutReporterInput
    reportsReceived?: ReportCreateNestedManyWithoutReportedInput
    matchesInitiated?: MatchCreateNestedManyWithoutUserAInput
    matchesReceived?: MatchCreateNestedManyWithoutUserBInput
    viewsReceived?: ViewCreateNestedManyWithoutUserBInput
    Admin?: AdminCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutViewsGivenInput = {
    id: string
    name: string
    description?: string | null
    avatarUrl?: string | null
    location: string
    personalityTags?: UserCreatepersonalityTagsInput | string[]
    workingStyle: $Enums.WorkingStyle
    collaborationPref: $Enums.CollaborationPref
    currentRole: string
    yearsExperience: number
    domainExpertise?: UserCreatedomainExpertiseInput | string[]
    skills?: UserCreateskillsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    pastProjects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    startupInfo?: StartupinfoUncheckedCreateNestedOneWithoutUserInput
    contactInfo?: ContactInfoUncheckedCreateNestedOneWithoutUserInput
    reportsFiled?: ReportUncheckedCreateNestedManyWithoutReporterInput
    reportsReceived?: ReportUncheckedCreateNestedManyWithoutReportedInput
    matchesInitiated?: MatchUncheckedCreateNestedManyWithoutUserAInput
    matchesReceived?: MatchUncheckedCreateNestedManyWithoutUserBInput
    viewsReceived?: ViewUncheckedCreateNestedManyWithoutUserBInput
    Admin?: AdminUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutViewsGivenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutViewsGivenInput, UserUncheckedCreateWithoutViewsGivenInput>
  }

  export type UserCreateWithoutViewsReceivedInput = {
    id: string
    name: string
    description?: string | null
    avatarUrl?: string | null
    location: string
    personalityTags?: UserCreatepersonalityTagsInput | string[]
    workingStyle: $Enums.WorkingStyle
    collaborationPref: $Enums.CollaborationPref
    currentRole: string
    yearsExperience: number
    domainExpertise?: UserCreatedomainExpertiseInput | string[]
    skills?: UserCreateskillsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    pastProjects?: ProjectCreateNestedManyWithoutUserInput
    startupInfo?: StartupinfoCreateNestedOneWithoutUserInput
    contactInfo?: ContactInfoCreateNestedOneWithoutUserInput
    reportsFiled?: ReportCreateNestedManyWithoutReporterInput
    reportsReceived?: ReportCreateNestedManyWithoutReportedInput
    matchesInitiated?: MatchCreateNestedManyWithoutUserAInput
    matchesReceived?: MatchCreateNestedManyWithoutUserBInput
    viewsGiven?: ViewCreateNestedManyWithoutUserAInput
    Admin?: AdminCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutViewsReceivedInput = {
    id: string
    name: string
    description?: string | null
    avatarUrl?: string | null
    location: string
    personalityTags?: UserCreatepersonalityTagsInput | string[]
    workingStyle: $Enums.WorkingStyle
    collaborationPref: $Enums.CollaborationPref
    currentRole: string
    yearsExperience: number
    domainExpertise?: UserCreatedomainExpertiseInput | string[]
    skills?: UserCreateskillsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    pastProjects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    startupInfo?: StartupinfoUncheckedCreateNestedOneWithoutUserInput
    contactInfo?: ContactInfoUncheckedCreateNestedOneWithoutUserInput
    reportsFiled?: ReportUncheckedCreateNestedManyWithoutReporterInput
    reportsReceived?: ReportUncheckedCreateNestedManyWithoutReportedInput
    matchesInitiated?: MatchUncheckedCreateNestedManyWithoutUserAInput
    matchesReceived?: MatchUncheckedCreateNestedManyWithoutUserBInput
    viewsGiven?: ViewUncheckedCreateNestedManyWithoutUserAInput
    Admin?: AdminUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutViewsReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutViewsReceivedInput, UserUncheckedCreateWithoutViewsReceivedInput>
  }

  export type UserUpsertWithoutViewsGivenInput = {
    update: XOR<UserUpdateWithoutViewsGivenInput, UserUncheckedUpdateWithoutViewsGivenInput>
    create: XOR<UserCreateWithoutViewsGivenInput, UserUncheckedCreateWithoutViewsGivenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutViewsGivenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutViewsGivenInput, UserUncheckedUpdateWithoutViewsGivenInput>
  }

  export type UserUpdateWithoutViewsGivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    personalityTags?: UserUpdatepersonalityTagsInput | string[]
    workingStyle?: EnumWorkingStyleFieldUpdateOperationsInput | $Enums.WorkingStyle
    collaborationPref?: EnumCollaborationPrefFieldUpdateOperationsInput | $Enums.CollaborationPref
    currentRole?: StringFieldUpdateOperationsInput | string
    yearsExperience?: IntFieldUpdateOperationsInput | number
    domainExpertise?: UserUpdatedomainExpertiseInput | string[]
    skills?: UserUpdateskillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pastProjects?: ProjectUpdateManyWithoutUserNestedInput
    startupInfo?: StartupinfoUpdateOneWithoutUserNestedInput
    contactInfo?: ContactInfoUpdateOneWithoutUserNestedInput
    reportsFiled?: ReportUpdateManyWithoutReporterNestedInput
    reportsReceived?: ReportUpdateManyWithoutReportedNestedInput
    matchesInitiated?: MatchUpdateManyWithoutUserANestedInput
    matchesReceived?: MatchUpdateManyWithoutUserBNestedInput
    viewsReceived?: ViewUpdateManyWithoutUserBNestedInput
    Admin?: AdminUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutViewsGivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    personalityTags?: UserUpdatepersonalityTagsInput | string[]
    workingStyle?: EnumWorkingStyleFieldUpdateOperationsInput | $Enums.WorkingStyle
    collaborationPref?: EnumCollaborationPrefFieldUpdateOperationsInput | $Enums.CollaborationPref
    currentRole?: StringFieldUpdateOperationsInput | string
    yearsExperience?: IntFieldUpdateOperationsInput | number
    domainExpertise?: UserUpdatedomainExpertiseInput | string[]
    skills?: UserUpdateskillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pastProjects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    startupInfo?: StartupinfoUncheckedUpdateOneWithoutUserNestedInput
    contactInfo?: ContactInfoUncheckedUpdateOneWithoutUserNestedInput
    reportsFiled?: ReportUncheckedUpdateManyWithoutReporterNestedInput
    reportsReceived?: ReportUncheckedUpdateManyWithoutReportedNestedInput
    matchesInitiated?: MatchUncheckedUpdateManyWithoutUserANestedInput
    matchesReceived?: MatchUncheckedUpdateManyWithoutUserBNestedInput
    viewsReceived?: ViewUncheckedUpdateManyWithoutUserBNestedInput
    Admin?: AdminUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutViewsReceivedInput = {
    update: XOR<UserUpdateWithoutViewsReceivedInput, UserUncheckedUpdateWithoutViewsReceivedInput>
    create: XOR<UserCreateWithoutViewsReceivedInput, UserUncheckedCreateWithoutViewsReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutViewsReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutViewsReceivedInput, UserUncheckedUpdateWithoutViewsReceivedInput>
  }

  export type UserUpdateWithoutViewsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    personalityTags?: UserUpdatepersonalityTagsInput | string[]
    workingStyle?: EnumWorkingStyleFieldUpdateOperationsInput | $Enums.WorkingStyle
    collaborationPref?: EnumCollaborationPrefFieldUpdateOperationsInput | $Enums.CollaborationPref
    currentRole?: StringFieldUpdateOperationsInput | string
    yearsExperience?: IntFieldUpdateOperationsInput | number
    domainExpertise?: UserUpdatedomainExpertiseInput | string[]
    skills?: UserUpdateskillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pastProjects?: ProjectUpdateManyWithoutUserNestedInput
    startupInfo?: StartupinfoUpdateOneWithoutUserNestedInput
    contactInfo?: ContactInfoUpdateOneWithoutUserNestedInput
    reportsFiled?: ReportUpdateManyWithoutReporterNestedInput
    reportsReceived?: ReportUpdateManyWithoutReportedNestedInput
    matchesInitiated?: MatchUpdateManyWithoutUserANestedInput
    matchesReceived?: MatchUpdateManyWithoutUserBNestedInput
    viewsGiven?: ViewUpdateManyWithoutUserANestedInput
    Admin?: AdminUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutViewsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    personalityTags?: UserUpdatepersonalityTagsInput | string[]
    workingStyle?: EnumWorkingStyleFieldUpdateOperationsInput | $Enums.WorkingStyle
    collaborationPref?: EnumCollaborationPrefFieldUpdateOperationsInput | $Enums.CollaborationPref
    currentRole?: StringFieldUpdateOperationsInput | string
    yearsExperience?: IntFieldUpdateOperationsInput | number
    domainExpertise?: UserUpdatedomainExpertiseInput | string[]
    skills?: UserUpdateskillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pastProjects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    startupInfo?: StartupinfoUncheckedUpdateOneWithoutUserNestedInput
    contactInfo?: ContactInfoUncheckedUpdateOneWithoutUserNestedInput
    reportsFiled?: ReportUncheckedUpdateManyWithoutReporterNestedInput
    reportsReceived?: ReportUncheckedUpdateManyWithoutReportedNestedInput
    matchesInitiated?: MatchUncheckedUpdateManyWithoutUserANestedInput
    matchesReceived?: MatchUncheckedUpdateManyWithoutUserBNestedInput
    viewsGiven?: ViewUncheckedUpdateManyWithoutUserANestedInput
    Admin?: AdminUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectCreateManyUserInput = {
    id?: string
    name: string
    description: string
    link?: string | null
  }

  export type ReportCreateManyReporterInput = {
    id?: string
    reportedId: string
    reason: string
    createdAt?: Date | string
  }

  export type ReportCreateManyReportedInput = {
    id?: string
    reporterId: string
    reason: string
    createdAt?: Date | string
  }

  export type MatchCreateManyUserAInput = {
    id?: string
    userBId: string
    mutual?: boolean
    createdAt?: Date | string
  }

  export type MatchCreateManyUserBInput = {
    id?: string
    userAId: string
    mutual?: boolean
    createdAt?: Date | string
  }

  export type ViewCreateManyUserAInput = {
    id?: string
    userBId: string
    createdAt?: Date | string
  }

  export type ViewCreateManyUserBInput = {
    id?: string
    userAId: string
    createdAt?: Date | string
  }

  export type AdminCreateManyUserInput = {
    id?: string
  }

  export type ProjectUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReportUpdateWithoutReporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reported?: UserUpdateOneRequiredWithoutReportsReceivedNestedInput
  }

  export type ReportUncheckedUpdateWithoutReporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportedId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyWithoutReporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportedId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUpdateWithoutReportedInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reporter?: UserUpdateOneRequiredWithoutReportsFiledNestedInput
  }

  export type ReportUncheckedUpdateWithoutReportedInput = {
    id?: StringFieldUpdateOperationsInput | string
    reporterId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyWithoutReportedInput = {
    id?: StringFieldUpdateOperationsInput | string
    reporterId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUpdateWithoutUserAInput = {
    id?: StringFieldUpdateOperationsInput | string
    mutual?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userB?: UserUpdateOneRequiredWithoutMatchesReceivedNestedInput
  }

  export type MatchUncheckedUpdateWithoutUserAInput = {
    id?: StringFieldUpdateOperationsInput | string
    userBId?: StringFieldUpdateOperationsInput | string
    mutual?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUncheckedUpdateManyWithoutUserAInput = {
    id?: StringFieldUpdateOperationsInput | string
    userBId?: StringFieldUpdateOperationsInput | string
    mutual?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUpdateWithoutUserBInput = {
    id?: StringFieldUpdateOperationsInput | string
    mutual?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userA?: UserUpdateOneRequiredWithoutMatchesInitiatedNestedInput
  }

  export type MatchUncheckedUpdateWithoutUserBInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAId?: StringFieldUpdateOperationsInput | string
    mutual?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUncheckedUpdateManyWithoutUserBInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAId?: StringFieldUpdateOperationsInput | string
    mutual?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewUpdateWithoutUserAInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userB?: UserUpdateOneRequiredWithoutViewsReceivedNestedInput
  }

  export type ViewUncheckedUpdateWithoutUserAInput = {
    id?: StringFieldUpdateOperationsInput | string
    userBId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewUncheckedUpdateManyWithoutUserAInput = {
    id?: StringFieldUpdateOperationsInput | string
    userBId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewUpdateWithoutUserBInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userA?: UserUpdateOneRequiredWithoutViewsGivenNestedInput
  }

  export type ViewUncheckedUpdateWithoutUserBInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewUncheckedUpdateManyWithoutUserBInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
  }



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