import React from 'react'
import { ActivityIndicator, View, Text as LoadingText } from 'react-native'

const Loading = ({ loadingText = "Loading Data.." }: { loadingText?: string }) => {
    return (
        <View className=''>
            <ActivityIndicator size="large" color="#0000ff" />
            <LoadingText className="mt-4 text-lg font-semibold text-white">{loadingText}</LoadingText>
        </View>
    )
}

export default Loading