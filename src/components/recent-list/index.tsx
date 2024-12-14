import { View, Text, FlatList } from "react-native";
import { s } from "./styles";
import { Recent } from "@/components/recent";

type Props = {
  data:{
    id: string,
    title: string,
    cover?: string
  }[]
}
export function RecentList({data} : Props) {
  return (
  
    <View style={s.container}>
      <Text style={s.title}>Recentes</Text>
      <FlatList 
       data={data}
       horizontal
       showsHorizontalScrollIndicator={false}
       contentContainerStyle={s.content}
       keyExtractor={item => item.id}
       renderItem={({item}) => <Recent  data={item}/>}
      />
    </View>
  )
}   

