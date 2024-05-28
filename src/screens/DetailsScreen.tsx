// src/screens/DetailScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, SectionList } from 'react-native';
import { DetailScreenProps, MockData } from '../libs/type';
import { useData } from '../libs/hooks';
import Loading from '../components/Loading';
import Button from '../components/Button';

const DetailScreen: React.FC<DetailScreenProps> = ({ navigate, params }) => {
    // @ts-ignore
    const itemId = params.itemId as string;
    const { data, error, isLoading: loading } = useData<MockData>(`http://localhost:5555/items/${itemId}`);

    if (loading) return (
        <View>
            <Loading />
        </View>
    );

    return (
        <View className='flex flex-col items-center flex-1 gap-2'>
            <View className='flex flex-col items-center justify-center gap-2 h-[60%] bg-black w-full rounded-br-[100px]'>
                <Text className='font-extrabold tracking-tight text-center text-7xl' >Tatanation</Text>
                <Text className='font-extrabold tracking-tight text-center first-letter:text-5xl' >React Native Windows Template</Text>
                <View className='flex flex-col items-center justify-end h-[20%]'>
                    <Text className='text-4xl font-extrabold tracking-tight text-center text-white'>Detailscreen</Text>
                </View>
            </View>
            <View className='flex items-start w-[90%]'>
                <Button onPress={() => navigate('Home')}>
                    <Text className='text-neutral-900'>Go to Home</Text>
                </Button>
            </View>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <>
                    {data ? (
                        <View className='w-8/12 mt-4 rounded-lg bg-neutral-900'>
                            <SectionList
                                sections={[
                                    {
                                        title: "ID : ",
                                        data: [String(data.id)]
                                    },
                                    {
                                        title: "Item Name : ",
                                        data: [data.name]
                                    },
                                    {
                                        title: "Item Descriptions : ",
                                        data: [data.description]
                                    }
                                ]}
                                renderItem={({ item }) => <Text className='mb-2 ml-8 text-base font-light text-white'>{item}</Text>}
                                keyExtractor={(item, index) => (item + index)}
                                renderSectionHeader={({ section }) => (
                                    <View className="bg-black rounded-sm" style={{ gap: 10, display: "flex", flexDirection: "row", alignItems: "center", padding: 12 }}>
                                        <Text className="flex-1 text-lg font-semibold text-white">{section.title}</Text>
                                    </View>
                                )}
                            />
                        </View>
                    ) : (
                        <Text>No data found.</Text>
                    )}
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default DetailScreen;
