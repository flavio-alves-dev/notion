import { View, Text , ScrollView} from "react-native";
import { colors } from "@/styles/colors";
import { DATA } from "@/utils/data";
import { Header } from "@/components/header";
import { RecentList } from "@/components/recent-list";
import { Pagelist } from "@/components/page-list";


export default function Index() {
  return (
    <View style={{ flex: 1 ,paddingTop:32}}>
      <Header />
      <ScrollView
       showsVerticalScrollIndicator={false}
       contentContainerStyle={{paddingTop:24, paddingBottom:100}}
       
      >
      <RecentList data={DATA.RECENT} />
      <Pagelist data={DATA.PAGES} />
      </ScrollView>
    </View>
  );
}
