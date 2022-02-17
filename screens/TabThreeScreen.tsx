import {ActivityIndicator, ScrollView, StyleSheet} from 'react-native';
import {Text, View} from '../components/Themed';
import {
    ActionBar,
    AnimatedImage,
    Avatar,
    Badge,
    Button,
    Card,
    Chip, ChipsInput,
    Colors,
    Drawer,
    ExpandableSection, ListItem, ProgressBar, SkeletonView,
    Spacings,
    Typography,
    Incubator
} from "react-native-ui-lib";
import {useState} from "react";

export default function TabThreeScreen() {
    const [isExpanded, setExpanded] = useState(false);
    const [isSkeleton, setSkeleton] = useState(true);
    const [chips, setChips] = useState([{label: 'Falcon 9'}, {label: 'Enterprise'}, {label: 'Challenger', borderRadius: 0}]);

    return (
        <>
            <ScrollView style={{padding:10}}>

                {/*<SkeletonView*/}
                {/*    template={SkeletonView.templates.LIST_ITEM}*/}
                {/*    showContent={isSkeleton}*/}
                {/*    renderContent={<ListItem><Text grey10 text60 marginL-10>The item</Text></ListItem>}*/}
                {/*    times={10}*/}
                {/*/>*/}

                <Incubator.ChipsInput
                    placeholder={'Placeholder'}
                    chips={chips}
                    defaultChipProps={{backgroundColor:'blue', labelStyle:{color:'white'}}}
                    onChange={newChips => setChips(newChips)}
                />

                <ProgressBar progress={55} progressColor={Colors.red30}/>


                <ExpandableSection
                    // top={true}
                    expanded={isExpanded}
                    sectionHeader={<Text grey10 text60>The section header</Text>}
                    onPress={() => setExpanded(!isExpanded)}
                >
                    <Text>Siema</Text>
                    <Avatar
                        source={{uri: 'https://static.pexels.com/photos/50721/pencils-crayons-colourful-rainbow-50721.jpeg'}}
                        label={'IT'}/>

                </ExpandableSection>

                <Drawer
                    rightItems={[{text: 'Read', background: Colors.blue30, onPress: () => console.log('read pressed')}]}
                    leftItem={{text: 'Delete', background: Colors.red30, onPress: () => console.log('delete pressed')}}
                >
                    <View centerV padding-s4 bg-white style={{height: 60, backgroundColor: 'orange',}}>
                        <Text text70>Im a drawer, slide me!</Text>
                    </View>
                </Drawer>


                <View style={styles.container}>
                    <Text style={styles.title}>Tab Three</Text>


                    <Drawer
                        rightItems={[{
                            text: 'Read',
                            background: Colors.blue30,
                            onPress: () => console.log('read pressed')
                        }]}
                        leftItem={{
                            text: 'Delete',
                            background: Colors.red30,
                            onPress: () => console.log('delete pressed')
                        }}
                    >
                        <View centerV padding-s4 bg-white style={{height: 60, backgroundColor: 'orange', width: 300}}>
                            <Text text70>Item</Text>
                        </View>
                    </Drawer>


                    <Badge label={'999'} size={16}/>

                    <AnimatedImage
                        containerStyle={{backgroundColor: Colors.blue50, marginBottom: 10}}
                        style={{resizeMode: 'cover', height: 250, width: 200}}
                        source={{uri: 'https://static.pexels.com/photos/50721/pencils-crayons-colourful-rainbow-50721.jpeg'}}
                        loader={<ActivityIndicator/>}
                        // key={index}
                        // animationDuration={index === 0 ? 300 : 800}
                        animationDuration={800}
                    />
                    <Avatar
                        source={{uri: 'https://lh3.googleusercontent.com/-cw77lUnOvmI/AAAAAAAAAAI/AAAAAAAAAAA/WMNck32dKbc/s181-c/104220521160525129167.jpg'}}
                        label={'IT'}
                        badgeProps={{label: '3'}}
                        badgePosition={'TOP_LEFT'}
                    />
                    <Avatar
                        source={{uri: 'https://static.pexels.com/photos/50721/pencils-crayons-colourful-rainbow-50721.jpeg'}}
                        label={'IT'}/>
                    <Badge label={'999'} size={16}/>
                    <Button label={'Press'} size={Button.sizes.medium} backgroundColor={Colors.red30}/>

                    <Card flex center onPress={() => console.log('pressed')} style={{marginVertical: 20}}>
                        <Text>ELO</Text>
                        <Card.Image
                            style={{resizeMode: 'cover', height: 250, width: 200}}
                            source={{uri: 'https://github.com/wix/react-native-ui-lib/blob/master/demo/src/assets/images/card-example.jpg'}}/>
                    </Card>

                    <Chip label={'Chip'} onPress={() => console.log('pressed')}/>
                    <Chip label={'Chip 2'} onPress={() => console.log('pressed')}/>
                    <Chip
                        resetSpacings
                        borderRadius={22}
                        label={'Chip'}
                        labelStyle={{color: Colors.red20, marginHorizontal: Spacings.s3, ...Typography.text70BO}}
                        iconStyle={{width: 16, height: 16}}
                        iconColor={Colors.black}
                        avatarProps={{
                            source: {
                                uri: 'https://randomuser.me/api/portraits/women/24.jpg'
                            }, size: 28
                        }}
                        // onDismiss={() => Alert.alert('onDismiss')}
                        // dismissIconStyle={{width: 10, height: 10, marginRight: Spacings.s3}}
                        // dismissColor={Colors.red20}
                        containerStyle={{
                            borderColor: Colors.red20,
                            borderBottomRightRadius: 0,
                            marginLeft: Spacings.s3
                        }}
                    />


                </View>
            </ScrollView>
            <ActionBar
                actions={[
                    {label: 'Delete', onPress: () => console.log('delete')},
                    {label: 'MakeMoney', onPress: () => console.log('make money')},
                    {label: 'Go on vacation', onPress: () => console.log('Go on vacation')},
                    {label: 'Delete 2', onPress: () => console.log('delete')},
                    {label: 'MakeMoney 2', onPress: () => console.log('make money')},
                    {label: 'Go on vacation 2', onPress: () => console.log('Go on vacation')}
                ]}
            /></>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 90,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
