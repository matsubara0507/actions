# Tweet by GitHub Action

use [tweepy](https://github.com/tweepy/tweepy).

## Inputs

- `consumer_key`, `consumer_secret`, `access_token`, `access_token_secret`
    - api keys to tweet
    - see: https://developer.twitter.com/en/docs/basics/getting-started
- `message`
    - tweet message
    - if null or empty string then display only twitter name

## Example usage

```yaml
uses: matsubara0507/actions/tweet@master
with:
  consumer_key: ${{ secrets.TWITTER_CONSUMER_KEY }}
  consumer_secret: ${{ secrets.TWITTER_CONSUMER_SECRET }}
  access_token: ${{ secrets.TWITTER_ACCESS_TOKEN }}
  access_token_secret: ${{ secrets.TWITTER_ACCESS_TOKEN_SECRET }}
  message: 'This is test tweet by GitHub Actions'
```
