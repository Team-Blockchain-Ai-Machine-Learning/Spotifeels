# Imports the Google Cloud client library
from google.cloud import language
from google.cloud.language import enums
from google.cloud.language import types

def analyze_text(to_analyze):
	# Instantiates a client
	client = language.LanguageServiceClient()

	# The text to analyze
	text = to_analyze
	document = types.Document(
	    content=text,
	    type=enums.Document.Type.PLAIN_TEXT)

	# Detects the sentiment of the text
	sentiment = client.analyze_sentiment(document=document).document_sentiment

	# print(f'Text: {text}')
	# print(f'Sentiment: {sentiment.score}, {sentiment.magnitude}')

	return sentiment.score

if __name__ == '__main__':
	print(analyze_text('Hello World'))