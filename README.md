# Safe Tune

**JavaScript (Node.js)** · **v0.1.0**

_JSON pretty-printer and validator for Node.js_

---

## Features

- Formats JSON from a file or stdin
- Minify mode
- Clear error reporting

## Installation

```bash
git clone https://github.com/DevCode01/safe-tune.git
cd safe-tune
```

## Usage

```bash
cat data.json | ./safe-tune.js
```

## How it works

Reads JSON from a file or stdin, validates it, and prints it pretty-printed with 2-space indentation (or minified with `-m`). Invalid JSON exits with a clear error.

## Options

- `file` - path to JSON file (reads stdin if omitted)
- `-m` / `--minify` - compact single-line output

## Example

```bash
$ echo '{"b":1,"a":2}' | ./safe-tune.js
{
  "b": 1,
  "a": 2
}
```

## Testing

```bash
bash tests/run.sh
```

Includes a functional check against real captured output, plus the build/syntax check.

## License

MIT
