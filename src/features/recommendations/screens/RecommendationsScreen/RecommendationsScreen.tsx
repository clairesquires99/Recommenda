import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { LoadingIndicator } from "src/components/LoadingIndicator";
import { RecommendedItem } from "src/components/RecommendedItem";
import { ScreenStyleWrapper } from "src/components/ScreenStyleWrapper";
import { useRecommendationsByMe } from "src/features/recommendations/screens/RecommendationsByMeScreen/useRecommendationsByMeScreen";
import { useRecommendationsToMeScreen } from "src/features/recommendations/screens/RecommendationsToMeScreen/useRecommendationsToMeScreen";

type Tab = "for-me" | "by-me";

const TABS: { id: Tab; label: string }[] = [
  { id: "for-me", label: "From friends" },
  { id: "by-me", label: "From me" },
];

export const RecommendationsScreen = () => {
  const [activeTab, setActiveTab] = useState<Tab>("for-me");

  const { isLoading: loadingToMe, recommendations: toMe } =
    useRecommendationsToMeScreen();
  const { isLoading: loadingByMe, recommendations: byMe } =
    useRecommendationsByMe();

  const isForMe = activeTab === "for-me";
  const isLoading = isForMe ? loadingToMe : loadingByMe;
  const recommendations = isForMe ? toMe : byMe;
  const displayedOnPage = isForMe ? "recommended to" : "recommended by";

  return (
    <ScreenStyleWrapper>
      {/* Page heading */}
      <View className="pb-4">
        <Text className="font-sans text-ds-eyebrow font-extrabold tracking-ds-wide text-ink-500 uppercase">
          My recommendations
        </Text>
        <Text className="font-display text-ds-h3 font-extrabold text-ink-700 tracking-ds-tight mt-1">
          {isForMe ? "What your\nfriends love" : "What you\nrecommend"}
        </Text>
      </View>

      {/* Pill toggle */}
      <View className="flex-row bg-surface border-2 border-ink/10 rounded-full p-1 mb-5">
        {TABS.map((tab) => {
          const active = tab.id === activeTab;
          return (
            <Pressable
              key={tab.id}
              onPress={() => setActiveTab(tab.id)}
              className={`flex-1 items-center justify-center py-2 rounded-full${active ? " bg-brand" : ""}`}
            >
              <Text
                className={`font-sans font-bold text-sm${active ? " text-paper" : " text-ink-500"}`}
              >
                {tab.label}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {/* Content */}
      {isLoading ? (
        <LoadingIndicator />
      ) : recommendations && recommendations.length > 0 ? (
        <FlatList
          data={recommendations}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <RecommendedItem item={item} displayedOnPage={displayedOnPage} />
          )}
          className="w-full"
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View className="h-3" />}
          contentContainerClassName="pb-8"
        />
      ) : isForMe ? (
        <View className="flex-1 items-center justify-center pb-16">
          <Text className="font-display text-ds-h4 font-extrabold text-ink-700 tracking-ds-tight text-center">
            Your shelf is empty
          </Text>
          <Text className="text-base text-ink-500 text-center mt-2 max-w-[260px]">
            Get your friends to share a recommendation!
          </Text>
        </View>
      ) : (
        <View className="flex-1 items-center justify-center pb-16 gap-2">
          <Text className="font-display text-ds-h4 font-extrabold text-ink-700 tracking-ds-tight text-center">
            Nothing given yet
          </Text>
          <Text className="text-base text-ink-500 text-center max-w-[260px]">
            Search for a book or film to recommend to your followers.
          </Text>
          <Pressable
            onPress={() => router.push("/recommendations/bookSearch")}
            className="flex-row items-center gap-2 bg-brand rounded-full px-5 min-h-[36px] mt-2"
          >
            <Feather name="plus" size={16} color="#F8F1E3" />
            <Text className="font-display font-bold text-sm text-paper tracking-ds-tight">
              Add
            </Text>
          </Pressable>
        </View>
      )}
    </ScreenStyleWrapper>
  );
};
