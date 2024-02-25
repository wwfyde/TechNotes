# Go Standard Libraries

> description: 
> link:
> alias: [Go标准库, 标准库, Go standard library]

## 参考资料

[XMind](/Users/wwfyde/Library/Mobile Documents/iCloud~net~xmind~brownieapp/Documents)

# context

> 参考资料:
>
> - https://go.dev/blog/context

## 英文文档

```shell
go doc context
```



> Package context defines the Context type, which carries deadlines, cancellation
>
> signals, and other request-scoped values across API boundaries and between
>
> processes.
>
> 
>
> Incoming requests to a server should create a Context, and outgoing calls to
>
> servers should accept a Context. The chain of function calls between them must
>
> propagate the Context, optionally replacing it with a derived Context created
>
> using WithCancel, WithDeadline, WithTimeout, or WithValue. When a Context is
>
> canceled, all Contexts derived from it are also canceled.
>
> 
>
> The WithCancel, WithDeadline, and WithTimeout functions take a Context (the
>
> parent) and return a derived Context (the child) and a CancelFunc. Calling the
>
> CancelFunc cancels the child and its children, removes the parent's reference to
>
> the child, and stops any associated timers. Failing to call the CancelFunc leaks
>
> the child and its children until the parent is canceled or the timer fires.
>
> The go vet tool checks that CancelFuncs are used on all control-flow paths.
>
> 
>
> The WithCancelCause function returns a CancelCauseFunc, which takes an error and
>
> records it as the cancellation cause. Calling Cause on the canceled context or
>
> any of its children retrieves the cause. If no cause is specified, Cause(ctx)
>
> returns the same value as ctx.Err().
>
> 
>
> Programs that use Contexts should follow these rules to keep interfaces
>
> consistent across packages and enable static analysis tools to check context
>
> propagation:
>
> 
>
> Do not store Contexts inside a struct type; instead, pass a Context explicitly
>
> to each function that needs it. The Context should be the first parameter,
>
> typically named ctx:
>
> 
>
>   func DoSomething(ctx context.Context, arg Arg) error {
>
> ​    // ... use ctx ...
>
>   }
>
> 
>
> Do not pass a nil Context, even if a function permits it. Pass context.TODO if
>
> you are unsure about which Context to use.
>
> 
>
> Use context Values only for request-scoped data that transits processes and
>
> APIs, not for passing optional parameters to functions.
>
> 
>
> The same Context may be passed to functions running in different goroutines;
>
> Contexts are safe for simultaneous use by multiple goroutines.
>
> See https://blog.golang.org/context for example code for a server that uses
>
> Contexts.

## 中文翻译

`context`包定义Context类(type Context interface{}), Context接口携带截止期限, 取消信号, 和(跨过API边界和在进程间携带)其他请求域值.

```go
type Context interface {
	// Deadline returns the time when work done on behalf of this context
	// should be canceled. Deadline returns ok==false when no deadline is
	// set. Successive calls to Deadline return the same results.
	Deadline() (deadline time.Time, ok bool)

	// Done returns a channel that's closed when work done on behalf of this
	// context should be canceled. Done may return nil if this context can
	// never be canceled. Successive calls to Done return the same value.
	// The close of the Done channel may happen asynchronously,
	// after the cancel function returns.
	//
	// WithCancel arranges for Done to be closed when cancel is called;
	// WithDeadline arranges for Done to be closed when the deadline
	// expires; WithTimeout arranges for Done to be closed when the timeout
	// elapses.
	//
	// Done is provided for use in select statements:
	//
	//  // Stream generates values with DoSomething and sends them to out
	//  // until DoSomething returns an error or ctx.Done is closed.
	//  func Stream(ctx context.Context, out chan<- Value) error {
	//  	for {
	//  		v, err := DoSomething(ctx)
	//  		if err != nil {
	//  			return err
	//  		}
	//  		select {
	//  		case <-ctx.Done():
	//  			return ctx.Err()
	//  		case out <- v:
	//  		}
	//  	}
	//  }
	//
	// See https://blog.golang.org/pipelines for more examples of how to use
	// a Done channel for cancellation.
	Done() <-chan struct{}

	// If Done is not yet closed, Err returns nil.
	// If Done is closed, Err returns a non-nil error explaining why:
	// Canceled if the context was canceled
	// or DeadlineExceeded if the context's deadline passed.
	// After Err returns a non-nil error, successive calls to Err return the same error.
	Err() error

	// Value returns the value associated with this context for key, or nil
	// if no value is associated with key. Successive calls to Value with
	// the same key returns the same result.
	//
	// Use context values only for request-scoped data that transits
	// processes and API boundaries, not for passing optional parameters to
	// functions.
	//
	// A key identifies a specific value in a Context. Functions that wish
	// to store values in Context typically allocate a key in a global
	// variable then use that key as the argument to context.WithValue and
	// Context.Value. A key can be any type that supports equality;
	// packages should define keys as an unexported type to avoid
	// collisions.
	//
	// Packages that define a Context key should provide type-safe accessors
	// for the values stored using that key:
	//
	// 	// Package user defines a User type that's stored in Contexts.
	// 	package user
	//
	// 	import "context"
	//
	// 	// User is the type of value stored in the Contexts.
	// 	type User struct {...}
	//
	// 	// key is an unexported type for keys defined in this package.
	// 	// This prevents collisions with keys defined in other packages.
	// 	type key int
	//
	// 	// userKey is the key for user.User values in Contexts. It is
	// 	// unexported; clients use user.NewContext and user.FromContext
	// 	// instead of using this key directly.
	// 	var userKey key
	//
	// 	// NewContext returns a new Context that carries value u.
	// 	func NewContext(ctx context.Context, u *User) context.Context {
	// 		return context.WithValue(ctx, userKey, u)
	// 	}
	//
	// 	// FromContext returns the User value stored in ctx, if any.
	// 	func FromContext(ctx context.Context) (*User, bool) {
	// 		u, ok := ctx.Value(userKey).(*User)
	// 		return u, ok
	// 	}
	Value(key any) any
}
```



## 思路解析

context的作用是提供一个上下文管理器(ctx), 以实现统一管理函数/方法创建的所有goroutine的生命周期.

上下文类型主要分为: 截止期限, 超时和键值对不存在.

以多路复用器为例, 当主函数defer cancel后, 通知所有select goroutine退出. 







## 函数

### WithCancel

### WithCancelCause

### WithDeadline

### WithDeadlineCause

### WithTimeout

### WithTimeoutCause

### WithValue

> 上下文携带一个键值对, 当目标函数判断键的值是否存在时, 传入该上下文

```go
type favContextKey string
f := func(ctx context.Context, k favContextKey) {
    if v := ctx.Value(k); v != nil {
        fmt.Println("found value:", v)
        return
    }
    fmt.Println("key not found:", k)
}

k := favContextKey("language")
ctx := context.WithValue(context.Background(), k, "Go")

f(ctx, k)
f(ctx, favContextKey("color"))

// Output:
// found value: Go
// key not found: color
```





## 类型

### Context

```go
type Context interface {
	Deadline() (deadline time.Time, ok bool)
	Done() <-chan struct{}
	Err() error
	Value(key any) any
}
```



### Background()



The difference is, this can be used by static analysis tools to validate if the context is being passed around properly, which is an important detail, as the static analysis tools can help surface potential bugs early on, and can be hooked up in a CI/CD pipeline.

### TODO()

### emptyCtx

### Background()与TODO()

二者在实现上是一致的, 都是一个空上下文(new(), 主要的区别是在语义上, 前者主要用于main函数, 初始化, 测试和作为请求接收(incoming request)的顶层上下文等最高层的函数中,后者表示不清晰使用何种上下文或上下文待实现(外围函数还没有扩展实现接收一个上下文参数)







# net

> 参考资料
>
> - https://time.geekbang.org/column/intro/100090601

## http

### 基本思路

编写路由处理函数Handler,

使用HandleFunc绑定路由和相应的(corresponding)处理函数Handler,

创建监听和服务(ListenAndServe)



# reflect

> 参考链接
>
> - [The Laws of Reflection](https://go.dev/blog/laws-of-reflection)
> - [社区中文翻译](https://learnku.com/articles/25154)

## articles

### The Laws of Reflection(反射定律)

> [The Laws of Reflection](https://go.dev/blog/laws-of-reflection)

> Reflection in computing is the ability of a program to examine its own structure, particularly through types; it’s a form of metaprogramming. It’s also a great source of confusion.
>
> In this article we attempt to clarify things by explaining how reflection works in Go. Each language’s reflection model is different (and many languages don’t support it at all), but this article is about Go, so for the rest of this article the word “reflection” should be taken to mean “reflection in Go”.
>
> Note added January 2022: This blog post was written in 2011 and predates parametric polymorphism (a.k.a. generics) in Go. Although nothing important in the article has become incorrect as a result of that development in the language, it has been tweaked in a few places to avoid confusing someone familiar with modern Go.

反射(Reflection)在计算科学(computing)中是指程序检查自身结构(尤其是通过类型)的能力. 反射是元编程形式的一种. 这也是造成大量困惑的来源.

这篇文章我们尝试阐明和解释反射在Go中如何工作. 每种语言的反射模型是不同的(很多语言不支持反射), 这篇文章是关于Go的, 文章的余下部分中"reflection"的严格语境是"reflection in Go".

#### Types and interfaces

Because reflection builds on the type system, let’s start with a refresher about types in Go.

因为<mark>反射建立在类型系统之上</mark>, 我们先来回顾一下Go中的类型.

Go is statically typed. Every variable has a static type, that is, exactly one type known and fixed at compile time:`int`, `float32`, `*MyType`, `[]byte`, and so on. If we declare: 

Go是一门静态类型语言. 每个变量都有一个静态类型, 我们在编译时就已知晓并固定变量的类型, 比如: `int`, `float32`, `*MyType`, `[]byte`等等, 如果我们声明:

```go
type MyInt int
var i int
var j MyInt
```

then `i` has type `int` and `j` has type `MyInt`. The variables `i` and `j` have distinct static types and, although they have the same underlying type, they cannot be assigned to one another without a conversion.

这时`i`的类型是`int`, `j`的类型是`MyInt`. 变量i和j有着不同即区别(distinct)的静态类型, 尽管他们有着相同的底层类型(underlying type), 它们不能相互赋值而不经过转换. 

One important category of type is interface types, which represent fixed sets of methods. (When discussing reflection, we can ignore the use of interface definitions as constraints within polymorphic code.) An interface variable can store any concrete (non-interface) value as long as that value implements the interface’s methods. A well-known pair of examples is `io.Reader` and `io.Writer`, the types `Reader` and `Writer` from the [io package](https://go.dev/pkg/io/):

一个重要的类型类别是接口类型(interface type), 接口类型代表着固定的方法集合. (讨论reflection时, 我们可以忽略在多态代码中使用接口定义作为约束. )接口变量可以储存(store, 赋值, 填充, 设置)任何具体(非接口)的值, 只要该值实现了接口声明的方法(<u>译者注: 某值要能赋值给接口(即通过编译检查), 就必须要实现接口中声明的所有方法签名</u>). 一对众所周知的例子是 `io.Reader`和`io.Writer`, `Reader`和`Writer`类型来自于 [io包](https://go.dev/pkg/io/):

```go
// Reader is the interface that wraps the basic Read method.
// Reader是一个封装了基础Read方法(方法签名)的接口
type Reader interface {
    Read(p []byte) (n int, err error)
}

// Writer is the interface that wraps the basic Write method.
// Writer 是一个封装了基础Write方法(方法签名)的结论
type Writer interface {
    Write(p []byte) (n int, err error)
}
```

Any type that implements a `Read` (or `Write`) method with this signature is said to implement `io.Reader` (or `io.Writer`). For the purposes of this discussion, that means that a variable of type `io.Reader` can hold any value whose type has a `Read` method:

任何类型只要实现了`Read`(或`Write`)方法签名(signature), 我们就可以说(理解为)该类型实现了`io.Reader`(或`io.Writer`). 以讨论为目的, 这意味着变量类型 `io.Reader`可以设置(hold, 持有, set)任何值只要该值的类型实现了`Read`方法:

```go
var r io.Reader
// set r to os.Stdin
// assign os.Stdin to r
r = os.Stdin
r = bufio.NewReader(r)
r = new(bytes.Buffer)
// and so on

```

<u>译者注: 方法实现是指方法签名实现, 不但具有相同的方法名, 其输入和输出的类型和数量需要完全一致, 方法名, 输入和输出三者构成了一个完整的方法签名</u>

It’s important to be clear that whatever concrete value `r` may hold, `r`’s type is always `io.Reader`: Go is statically typed and the static type of `r` is `io.Reader`.

搞清楚`r`可能设置(hold, 持有)何种具体值是重要的, `r`的类型总是`io.Reader`: Go是静态类型的并且`r`的静态类型是`io.Reader`.

An extremely important example of an interface type is the empty interface:

一个非常重要的接口类型的例子是空接口(empty interface):

```go
interface{}
```

or its equivalent alias, 

或它的等效(equivalent)别名, 

```go
// In go interface{} always equal to any
// 译者注: Go中, any恒等于interface{}
any
```

It represents the empty set of methods and is satisfied by any value at all, since every value has zero or more methods.

空接口意味着空的方法集合(空接口没有任何方法约束), 任何值都能满足空接口的定义, 因为每个值总是有任意(zero or more)个方法.

Some people say that Go’s interfaces are dynamically typed, but that is misleading. They are statically typed: a variable of interface type always has the same static type, and even though at run time the value stored in the interface variable may change type, that value will always satisfy the interface.

某些人认为Go接口是动态类型的, 但这其实是一种误导. 接口是静态类型的: 接口变量总是具有相同的静态类型, 尽管储存在接口变量上的值的类型可能在运行时发生改变, 这个值任然总是满足该接口声明的.

We need to be precise about all this because reflection and interfaces are closely related.

我们需要准确理解上述这些全部内容, 因为反射和接口是密切相关的.

#### The representation of an interface



#### The first law of reflection

#### 1. Reflection goes from interface value to reflection object.

## 

# 待整理

## os

提供一些函数和变量, 以与平台无关的方式和操作系统打交道

### os.Args

## fmt

> 格式化工具

### interview

The verbs:

General:

```
%v	the value in a default format
	when printing structs, the plus flag (%+v) adds field names
%#v	a Go-syntax representation of the value
%T	a Go-syntax representation of the type of the value
%%	a literal percent sign; consumes no value
```

Boolean:

```
%t	the word true or false
```

Integer:

```
%b	base 2
%c	the character represented by the corresponding Unicode code point
%d	base 10
%o	base 8
%O	base 8 with 0o prefix
%q	a single-quoted character literal safely escaped with Go syntax.
%x	base 16, with lower-case letters for a-f
%X	base 16, with upper-case letters for A-F
%U	Unicode format: U+1234; same as "U+%04X"
```

Floating-point and complex constituents:

```
%b	decimalless scientific notation with exponent a power of two,
	in the manner of strconv.FormatFloat with the 'b' format,
	e.g. -123456p-78
%e	scientific notation, e.g. -1.234456e+78
%E	scientific notation, e.g. -1.234456E+78
%f	decimal point but no exponent, e.g. 123.456
%F	synonym for %f
%g	%e for large exponents, %f otherwise. Precision is discussed below.
%G	%E for large exponents, %F otherwise
%x	hexadecimal notation (with decimal power of two exponent), e.g. -0x1.23abcp+20
%X	upper-case hexadecimal notation, e.g. -0X1.23ABCP+20
```

String and slice of bytes (treated equivalently with these verbs):

```
%s	the uninterpreted bytes of the string or slice
%q	a double-quoted string safely escaped with Go syntax
%x	base 16, lower-case, two characters per byte
%X	base 16, upper-case, two characters per byte
```

Slice:

```
%p	address of 0th element in base 16 notation, with leading 0x
```

Pointer:

```
%p	base 16 notation, with leading 0x
The %b, %d, %o, %x and %X verbs also work with pointers,
formatting the value exactly as if it were an integer.
```

The default format for %v is:

```
bool:                    %t
int, int8 etc.:          %d
uint, uint8 etc.:        %d, %#x if printed with %#v
float32, complex64, etc: %g
string:                  %s
chan:                    %p
pointer:                 %p
```

For compound objects, the elements are printed using these rules, recursively, laid out like this:

```
struct:             {field0 field1 ...}
array, slice:       [elem0 elem1 ...]
maps:               map[key1:value1 key2:value2 ...]
pointer to above:   &{}, &[], &map[]
```

Width is specified by an optional decimal number immediately preceding the verb. If absent, the width is whatever is
necessary to represent the value. Precision is specified after the (optional) width by a period followed by a decimal
number. If no period is present, a default precision is used. A period with no following number specifies a precision of
zero. Examples:

```
%f     default width, default precision
%9f    width 9, default precision
%.2f   default width, precision 2
%9.2f  width 9, precision 2
%9.f   width 9, precision 0
```

Width and precision are measured in units of Unicode code points, that is, runes. (This differs from C's printf where
the units are always measured in bytes.) Either or both of the flags may be replaced with the character '*', causing
their values to be obtained from the next operand (preceding the one to format), which must be of type int.

For most values, width is the minimum number of runes to output, padding the formatted form with spaces if necessary.

For strings, byte slices and byte arrays, however, precision limits the length of the input to be formatted (not the
size of the output), truncating if necessary. Normally it is measured in runes, but for these types when formatted with
the %x or %X format it is measured in bytes.

For floating-point values, width sets the minimum width of the field and precision sets the number of places after the
decimal, if appropriate, except that for %g/%G precision sets the maximum number of significant digits (trailing zeros
are removed). For example, given 12.345 the format %6.3f prints 12.345 while %.3g prints 12.3. The default precision for
%e, %f and %#g is 6; for %g it is the smallest number of digits necessary to identify the value uniquely.

For complex numbers, the width and precision apply to the two components independently and the result is parenthesized,
so %f applied to 1.2+3.4i produces (1.200000+3.400000i).

When formatting a single integer code point or a rune string (type []rune) with %q, invalid Unicode code points are
changed to the Unicode replacement character, U+FFFD, as in strconv.QuoteRune.

Other flags:

```
'+'	always print a sign for numeric values;
	guarantee ASCII-only output for %q (%+q)
'-'	pad with spaces on the right rather than the left (left-justify the field)
'#'	alternate format: add leading 0b for binary (%#b), 0 for octal (%#o),
	0x or 0X for hex (%#x or %#X); suppress 0x for %p (%#p);
	for %q, print a raw (backquoted) string if strconv.CanBackquote
	returns true;
	always print a decimal point for %e, %E, %f, %F, %g and %G;
	do not remove trailing zeros for %g and %G;
	write e.g. U+0078 'x' if the character is printable for %U (%#U).
' '	(space) leave a space for elided sign in numbers (% d);
	put spaces between bytes printing strings or slices in hex (% x, % X)
'0'	pad with leading zeros rather than spaces;
	for numbers, this moves the padding after the sign;
	ignored for strings, byte slices and byte arrays
```

Flags are ignored by verbs that do not expect them. For example there is no alternate decimal format, so %#d and %d
behave identically.

For each Printf-like function, there is also a Print function that takes no format and is equivalent to saying %v for
every operand. Another variant Println inserts blanks between operands and appends a newline.

Regardless of the verb, if an operand is an interface value, the internal concrete value is used, not the interface
itself. Thus:

```
var i interface{} = 23
fmt.Printf("%v\n", i)
```

will print 23.

Except when printed using the verbs %T and %p, special formatting considerations apply for operands that implement
certain interfaces. In order of application:

\1. If the operand is a reflect.Value, the operand is replaced by the concrete value that it holds, and printing
continues with the next rule.

\2. If an operand implements the Formatter interface, it will be invoked. In this case the interpretation of verbs and
flags is controlled by that implementation.

\3. If the %v verb is used with the # flag (%#v) and the operand implements the GoStringer interface, that will be
invoked.

If the format (which is implicitly %v for Println etc.) is valid for a string (%s %q %v %x %X), the following two rules
apply:

\4. If an operand implements the error interface, the Error method will be invoked to convert the object to a string,
which will then be formatted as required by the verb (if any).

\5. If an operand implements method String() string, that method will be invoked to convert the object to a string,
which will then be formatted as required by the verb (if any).

For compound operands such as slices and structs, the format applies to the elements of each operand, recursively, not
to the operand as a whole. Thus %q will quote each element of a slice of strings, and %6.2f will control formatting for
each element of a floating-point array.

However, when printing a byte slice with a string-like verb (%s %q %x %X), it is treated identically to a string, as a
single item.

To avoid recursion in cases such as

```
type X string
func (x X) String() string { return Sprintf("<%s>", x) }
```

convert the value before recurring:

```
func (x X) String() string { return Sprintf("<%s>", string(x)) }
```

Infinite recursion can also be triggered by self-referential data structures, such as a slice that contains itself as an
element, if that type has a String method. Such pathologies are rare, however, and the package does not protect against
them.

When printing a struct, fmt cannot and therefore does not invoke formatting methods such as Error or String on
unexported fields.

#### Explicit argument indexes [¶](https://pkg.go.dev/fmt#hdr-Explicit_argument_indexes)

In Printf, Sprintf, and Fprintf, the default behavior is for each formatting verb to format successive arguments passed
in the call. However, the notation [n] immediately before the verb indicates that the nth one-indexed argument is to be
formatted instead. The same notation before a '*' for a width or precision selects the argument index holding the value.
After processing a bracketed expression [n], subsequent verbs will use arguments n+1, n+2, etc. unless otherwise
directed.

For example,

```
fmt.Sprintf("%[2]d %[1]d\n", 11, 22)
```

will yield "22 11", while

```
fmt.Sprintf("%[3]*.[2]*[1]f", 12.0, 2, 6)
```

equivalent to

```
fmt.Sprintf("%6.2f", 12.0)
```

will yield " 12.00". Because an explicit index affects subsequent verbs, this notation can be used to print the same
values multiple times by resetting the index for the first argument to be repeated:

```
fmt.Sprintf("%d %d %#[1]x %#x", 16, 17)
```

will yield "16 17 0x10 0x11".

#### Format errors [¶](https://pkg.go.dev/fmt#hdr-Format_errors)

If an invalid argument is given for a verb, such as providing a string to %d, the generated string will contain a
description of the problem, as in these examples:

```
Wrong type or unknown verb: %!verb(type=value)
	Printf("%d", "hi"):        %!d(string=hi)
Too many arguments: %!(EXTRA type=value)
	Printf("hi", "guys"):      hi%!(EXTRA string=guys)
Too few arguments: %!verb(MISSING)
	Printf("hi%d"):            hi%!d(MISSING)
Non-int for width or precision: %!(BADWIDTH) or %!(BADPREC)
	Printf("%*s", 4.5, "hi"):  %!(BADWIDTH)hi
	Printf("%.*s", 4.5, "hi"): %!(BADPREC)hi
Invalid or invalid use of argument index: %!(BADINDEX)
	Printf("%*[2]d", 7):       %!d(BADINDEX)
	Printf("%.[2]d", 7):       %!d(BADINDEX)
```

All errors begin with the string "%!" followed sometimes by a single character (the verb) and end with a parenthesized
description.

If an Error or String method triggers a panic when called by a print routine, the fmt package reformats the error
message from the panic, decorating it with an indication that it came through the fmt package. For example, if a String
method calls panic("bad"), the resulting formatted message will look like

```
%!s(PANIC=bad)
```

The %!s just shows the print verb in use when the failure occurred. If the panic is caused by a nil receiver to an Error
or String method, however, the output is the undecorated string, "<nil>".

### fmt.Printf

> f: format, 输出格式化字符串

用于格式化输出, 第一个参数是格式化指示字符串. 转义字符(escapes)被称为verb

默认不写换行符

按照约定: `log.Printf`和 `fmt.Errorf` 之类的格式化函数以f结尾, 使用和 `fmt.Printf` 相同的格式化规则; 而那些以
ln结尾的函数则使用%v的方式来格式化参数, 并在最好追加换行符。

通常`Printf`的格式化字符串含有多个%谓词, 这要求提供相同数目的操作数,

### fmt.Println

> ln: line, 输出一行, 并具有换行符

## strings

> 类似于Python中的字符串的方法
>
> 提供了许多函数, 用于查找(search)、替换(replace)、比较(compare、修整(trim)、切分(split)与连接(join)字符串

### strings.Join

## bufio

简便和高效地处理输入和输出。

## bytes

## unicode

> 判断文字符号(rune)的特性类型, 并返回布尔值

## strconv

> 主要用于转换布尔值、整数、浮点数为与之对应的字符串形式, 或者把字符串转换为布尔值、整数、浮点数, 另外还有为字符串添加/去除引号的函数.