# Dump script result as outputs

use script result on next step.
access next step by `steps.[step_id].outputs.result`.

## Inputs

- `script_path`, `shell`
    - exec script on `script_path` by `shell`

## Outputs

- `result`
    - result of executed script

## Example usage

```yaml
build:
  runs-on: ubuntu-18.04
  steps:
  - uses: actions/checkout@v1
    with:
      fetch-depth: 1
  - uses: matsubara0507/actions/outputs@master
    id: hoge
    env:
      HOGE: hogege
    with:
      script_path: ./.github/scripts/echo.bash
  - uses: docker://ubuntu:18.04
    with:
      entrypoint: /bin/echo
      args: ${{ steps.hoge.outputs.result }}
```
