import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Platform,
	Image,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import { Camera } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasCameraPermission: null,
			faces: []

		};
		this.onFacesDetected = this.onFacesDetected.bind(this);
	}

	async componentDidMount() {
		const { status } = await Camera.requestPermissionAsync();
		this.setState({ hasCameraPermission: status === "granted"});
	}

	onFacesDetected({ faces }) {
		this.setState({ faces: faces });

	}

 <View style ={styles.middleContainer}>
	<Camera
	style={{ flex: 1}}
	type={Camera.Constants.Type.front}
	faceDetectorSettings={{
		mode: FaceDetector.Constants.Mode.fast,
		detectLandmarks: FaceDetector.Constants.Classification.all
	}}
	onFacesDetected={this.onFacesDetected}
	onFacesDetectedError={this.onFacesDetectionError}
	
	/>
	
</View>