import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, FlatList } from 'react-native';
import { launchImageLibrary, ImagePickerResponse, MediaType, ImageLibraryOptions } from 'react-native-image-picker';
type ImageLibraryResponse = ImagePickerResponse & { assets?: { uri: string }[] };
import PostItem from './PostItem';
interface Post {
  id: number;
  content: string;
  images: string[];
}

interface Props {
  navigation: any;
}

const Home: React.FC<Props> = ({ navigation }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [postContent, setPostContent] = useState('');
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleSendComment = () => {
    if (comment.trim() === '') {
      Alert.alert('Error', 'Please enter a comment.');
      return;
    }
    setComments([...comments, comment]);
    setComment('');
  };

  const handlePost = () => {
    if (postContent.trim() === '' && selectedImages.length === 0) {
      Alert.alert('Error', 'Please enter some content for the post or select images.');
      return;
    }
    const newPost: Post = {
      id: posts.length + 1,
      content: postContent,
      images: [...selectedImages],
    };
    setPosts([newPost, ...posts]);
    setPostContent('');
    setSelectedImages([]);
  };
  // const selectImages = async () => {
  //   try {
  //     const options: ImageLibraryOptions = {
  //       mediaType: 'photo',
  //       quality: 1,
  //       includeBase64: false,
  //       maxHeight: 500,
  //       maxWidth: 500,
  //     };
  
  //     launchImageLibrary(options, (response: ImagePickerResponse) => {
  //       if (!response.didCancel && response.assets) {
  //         const selectedImageUris = response.assets
  //           .map(asset => asset.uri)
  //           .filter(uri => uri !== undefined) as string[];
  //         setSelectedImages(prevImages => [...prevImages, ...selectedImageUris]);
  //       }
  //     });
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.inputContainer}
        onPress={() => setIsFormVisible(!isFormVisible)}>
        <Text style={styles.outerText}>What's on your mind?</Text>
        {isFormVisible && (
          <TextInput
            style={[styles.input, styles.expandedInput]}
            placeholder="Write here..."
            onChangeText={(text) => setPostContent(text)}
            value={postContent}
            multiline={true}
            numberOfLines={4}
            editable={true}
          />
        )}
      </TouchableOpacity>

      {isFormVisible && (
        <View style={styles.formContainer}>
         <TouchableOpacity style={styles.imageButton}  >
  <Text style={styles.imageButtonText}>Select Images</Text>
</TouchableOpacity>
          <TouchableOpacity style={styles.postButton} onPress={handlePost}>
            <Text style={styles.postButtonText}>Post</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => setIsFormVisible(false)}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      )}

      {selectedImages.length > 0 && (
        <FlatList
          data={selectedImages}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={styles.selectedImage} />
          )}
        />
      )}

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PostItem
            postContent={item.content}
            images={item.images}
            navigation={navigation}
            postId={item.id}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  outerText: {
    color: '#aaa',
  },
  input: {
    height: 40,
  },
  expandedInput: {
    height: 150,
  },
  formContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  imageButton: {
    backgroundColor: '#4267B2',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  imageButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  postButton: {
    backgroundColor: '#4267B2',
    padding: 15,
    borderRadius: 10,
  },
  postButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cancelButton: {
    backgroundColor: '#ccc',
    padding: 15,
    borderRadius: 10,
  },
  cancelButtonText: {
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  selectedImage: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 10,
  },
});

export default Home;
