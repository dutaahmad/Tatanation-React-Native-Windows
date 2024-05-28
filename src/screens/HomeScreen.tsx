// src/screens/HomeScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, SectionList } from 'react-native';
import { Loading, Logo, Button } from '../components';
import { useData } from '../libs/hooks';
import { HomeScreenProps, MockDatas } from '../libs/type';

const HomeScreen: React.FC<HomeScreenProps> = ({ navigate }) => {
    const { data, error, isLoading: loading } = useData<MockDatas>("http://localhost:5555/items");

    if (loading) return (
        <View>
            <Loading />
        </View>
    );
    else if (data) return (
        <View className='flex flex-col items-center flex-1 gap-2'>
            <View className='flex flex-col items-center justify-center gap-2 h-[60%] bg-black w-full rounded-br-[100px] rounded-bl-[-60px]'>
                <Logo />
                <Text className='font-extrabold tracking-tight text-center text-7xl' >Tatanation</Text>
                <Text className='font-extrabold tracking-tight text-center first-letter:text-5xl' >React Native Windows Template</Text>
                <View className='flex flex-col items-center justify-end h-[20%]'>
                    <Text className='text-4xl font-extrabold tracking-tight text-center text-white'>Homescreen</Text>
                </View>
            </View>
            <View className='w-8/12 mt-4 rounded-lg bg-neutral-900'>
                <SectionList
                    sections={data.map((item) => ({ title: item.name, id: item.id.toString(), data: [item.description] }))}
                    renderItem={({ item }) => <Text className='mb-4 text-base font-light text-white'>{item}</Text>}
                    keyExtractor={(item, index) => (item + index)}
                    renderSectionHeader={({ section }) => (
                        <View className="bg-black rounded-sm" style={{ gap: 10, display: "flex", flexDirection: "row", alignItems: "center", padding: 12 }}>
                            <Text className="flex-1 text-lg font-semibold text-white">{section.title}</Text>
                            <Button
                                className='p-2 bg-white rounded-md active:bg-gray-200'
                                onPress={() => navigate("Details", { itemId: section.id })}
                            >
                                <Text className='text-neutral-900'>Go to Details</Text>
                            </Button>
                        </View>
                    )}
                />
            </View>
        </View>
    );

    return (
        <View className='flex-1 flex flex-col items-center justify-center gap-4 h-[70%]'>
            <Text className='font-extrabold tracking-tight text-7xl' >Tatanation</Text>
            <Text className='text-5xl font-extrabold tracking-tight' >React Native Windows Template</Text>
        </View>
    );
};

export default HomeScreen;
