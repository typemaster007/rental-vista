from configparser import ConfigParser
from flask import Flask, jsonify, request
import pymongo

# Create an instance of class, first argument is name of application
app = Flask(__name__)

# Read Creadential File
config = ConfigParser()
config.read('config.ini')

# Get Credentials
client = pymongo.MongoClient()
db = client.Tutorial5
# INTERVAL = config.get('DEFAULT', 'TimeIntervals', fallback=0.1)
# AWS_ACCESS_KEY_ID = config.get('AWS', 'AWS_ACCESS_KEY_ID')