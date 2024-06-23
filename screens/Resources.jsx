import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Video } from 'expo-av';
import AntDesign from '@expo/vector-icons/AntDesign';

const videos = [
  { id: 1, title: "Video 1", category: "diabetes", src: require('../assets/video4.mp4') },
  { id: 2, title: "Video 2", category: "diabetes", src: require('../assets/video4.mp4') },
  { id: 3, title: "Video 3", category: "hypertension", src: require('../assets/video4.mp4') },
  { id: 4, title: "Video 4", category: "diabetes", src: require('../assets/video4.mp4') },
  { id: 5, title: "Video 5", category: "hypertension", src: require('../assets/video4.mp4') },
  { id: 6, title: "Video 6", category: "diabetes", src: require('../assets/video4.mp4') },
  { id: 7, title: "Video 7", category: "cardio", src: require('../assets/video4.mp4') },
  { id: 8, title: "Video 8", category: "diabetes", src: require('../assets/video4.mp4') }
];

const Resources = () => {
  const [currentPlayingId, setCurrentPlayingId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 3;
  const videoRefs = useRef({});
  const [searchTerm, setSearchTerm] = useState('');

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const filteredVideos = videos.filter(video => video.category.toLowerCase().includes(searchTerm.toLowerCase()));
  const currentVideos = filteredVideos.slice(indexOfFirstVideo, indexOfLastVideo);

  const paginate = (pageNumber) => {
    stopAllVideos();
    setCurrentPage(pageNumber);
  };

  const togglePlayPause = (id) => {
    if (currentPlayingId === id) {
      videoRefs.current[id].pauseAsync();
      setCurrentPlayingId(null);
    } else {
      if (currentPlayingId !== null) {
        videoRefs.current[currentPlayingId].pauseAsync();
      }
      videoRefs.current[id].playAsync();
      setCurrentPlayingId(id);
    }
  };
  const stopVideo = (id) => {
    videoRefs.current[id].stopAsync().then(() => {
      videoRefs.current[id].setPositionAsync(0);
    });
    setCurrentPlayingId(null);
  };

  const stopAllVideos = () => {
    if (currentPlayingId !== null) {
      videoRefs.current[currentPlayingId].stopAsync().then(() => {
        videoRefs.current[currentPlayingId].setPositionAsync(0);
      });
      setCurrentPlayingId(null);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Education Resources</Text>
        <TextInput
          placeholder='Search ...'
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
          style={styles.searchInput}
        />
      </View>
      <FlatList
        data={currentVideos}
        renderItem={({ item }) => (
          <View style={styles.videoContainer}>
            <TouchableOpacity onPress={() => togglePlayPause(item.id)}>
              <Video
                ref={el => videoRefs.current[item.id] = el}
                source={item.src}
                style={styles.video}
                useNativeControls
                resizeMode="contain"
                shouldPlay={currentPlayingId === item.id}
              />
              {currentPlayingId !== item.id && (
                <View style={styles.playButtonOverlay}>
                  <Text style={styles.playButtonText}><AntDesign name="play" size={55} color="white" /></Text>
                </View>
              )}
               {currentPlayingId === item.id && (
                <TouchableOpacity style={styles.closeButton} onPress={() => stopVideo(item.id)}>
                  <Text style={styles.closeButtonText}>✖</Text>
                </TouchableOpacity>
              )}
              <View style={styles.videoOverlay}>
                <Text style={styles.videoTitle}>{item.title}</Text>
                <Text style={styles.videoCategory}>{item.category}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
      <View style={styles.pagination}>
        {Array.from({ length: Math.ceil(filteredVideos.length / videosPerPage) }, (_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => paginate(index + 1)}
            style={[
              styles.pageButton,
              currentPage === index + 1 ? styles.activePageButton : styles.inactivePageButton,
            ]}
          >
            <Text style={styles.pageButtonText}>{index + 1}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    width:'100%'
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    marginTop:60
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E5DFF',
  },
  searchInput: {
    paddingVertical:10,
    borderColor:'#1E5DFF',
    backgroundColor:'white',
    width:350,
    height:40,
    borderRadius:40,
    paddingHorizontal:25,
    borderWidth:0.4,
    margin:16
  },
  videoContainer: {
    display:'flex',
    flexDirection:'column',
    gap:10,
    margin:5,
   
  },
  video: {
    width: '100%',
    aspectRatio: 16 / 9,
    height:200
  },
  playButtonOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  playButtonText: {
    fontSize: 48,
    color: '#fff',
  },
  closeButton: {
    position: 'absolute',
    color:'white',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    padding: 5,
  },
  videoOverlay: {
    position: 'absolute',
    bottom: 8,
    left: 8,
  },
  videoTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  videoCategory: {
    color: '#fff',
    fontSize: 14,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 18,
  },
  pageButton: {
    marginHorizontal: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  activePageButton: {
    backgroundColor: '#1E5DFF',
  },
  inactivePageButton: {
    backgroundColor: '#ccc',
  },
  pageButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Resources;
