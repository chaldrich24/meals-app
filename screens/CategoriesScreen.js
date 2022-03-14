import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Platform } from 'react-native';
import colors from '../constants/colors';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals',
                        params: {
                            categoryId: itemData.item.id
                        }
                    })
                }} />
        )
    };

    return (
        <FlatList data={CATEGORIES} renderItem={renderGridItem} keyExtractor={(item, index) => item.id} numColumns={2} />
    )
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories'
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

});

export default CategoriesScreen;