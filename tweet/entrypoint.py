#!/usr/bin/env python

import sys
import tweepy

[_, consumer_key, consumer_secret, access_token, access_token_secret, message] = sys.argv

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)

api = tweepy.API(auth)
name = api.me().screen_name

if not message:
    print(f"Hi, @{name} !!")
else:
    status = api.update_status(status=message)
    print(f"https://twitter.com/{name}/status/{status.id}")
