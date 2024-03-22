from python import Youtube

video_url = "http://www.youtube.com/watch?v=dQw4w9WgXcQ"
save_location = "./"

yt = Youtube(video_url)
#options of download
stream = yt.streams.filter(res="720p" , progressive=True).first()
stream.download(output_path=save_location)