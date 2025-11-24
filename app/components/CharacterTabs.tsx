"use client";

import Link from "next/link";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import CharacterImage from "./CharacterImage";
import { CharacterSummary } from "../data/characters";

type TabType = "HUNTR/X" | "Saja Boys" | "Others";

interface CharacterTabsProps {
  characters: CharacterSummary[];
}

export default function CharacterTabs({ characters }: CharacterTabsProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  // URL 파라미터에서 탭 값을 읽어오기
  const getInitialTab = useCallback((): TabType => {
    const tabParam = searchParams.get('tab');
    if (tabParam === "HUNTR/X" || tabParam === "Saja Boys" || tabParam === "Others") {
      return tabParam;
    }
    return "HUNTR/X";
  }, [searchParams]);

  const [activeTab, setActiveTab] = useState<TabType>(getInitialTab);

  // URL 파라미터가 변경되었을 때 탭 상태 동기화
  useEffect(() => {
    const currentTab = getInitialTab();
    if (currentTab !== activeTab) {
      setActiveTab(currentTab);
    }
  }, [searchParams, activeTab, getInitialTab]);

  // 탭 변경 시 URL 업데이트
  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set('tab', tab);
    router.replace(`/characters?${newParams.toString()}`, { scroll: false });
  };

  const getCharactersByTab = (tab: TabType) => {
    switch (tab) {
      case "HUNTR/X":
        return characters.filter((character) => character.role.includes("HUNTR/X"));
      case "Saja Boys":
        return characters.filter((character) => character.role.includes("Saja Boys"));
      case "Others":
        return characters.filter(
          (character) =>
            !character.role.includes("HUNTR/X") &&
            !character.role.includes("Saja Boys")
        );
      default:
        return [];
    }
  };

  const getTabConfig = (tab: TabType) => {
    switch (tab) {
      case "HUNTR/X":
        return {
          title: "HUNTR/X",
          description: "The demon-hunting K-pop group protecting humanity with their music and magical abilities",
          borderColor: "border-pink-500",
          activeColor: "bg-pink-500",
          hoverBg: "hover:bg-pink-50",
          textColor: "text-pink-600",
          badgeColor: "bg-pink-100 text-pink-700"
        };
      case "Saja Boys":
        return {
          title: "Saja Boys",
          description: "The demonic boy band serving the Demon King, using their music to drain souls",
          borderColor: "border-purple-500",
          activeColor: "bg-purple-500",
          hoverBg: "hover:bg-purple-50",
          textColor: "text-purple-600",
          badgeColor: "bg-purple-100 text-purple-700"
        };
      case "Others":
        return {
          title: "Other Characters",
          description: "Mentors, allies, and villains who shape the story",
          borderColor: "border-cyan-500",
          activeColor: "bg-cyan-500",
          hoverBg: "hover:bg-cyan-50",
          textColor: "text-cyan-600",
          badgeColor: "bg-cyan-100 text-cyan-700"
        };
      default:
        return {
          title: "",
          description: "",
          borderColor: "",
          activeColor: "",
          hoverBg: "",
          textColor: "",
          badgeColor: ""
        };
    }
  };

  return (
    <>
      {/* Tab Navigation - Clean & Modern */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-white rounded-xl p-1.5 shadow-md border border-gray-200">
          {(["HUNTR/X", "Saja Boys", "Others"] as TabType[]).map((tab) => {
            const config = getTabConfig(tab);
            return (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`
                  relative px-8 py-3 rounded-lg text-base font-semibold transition-all duration-250
                  ${activeTab === tab
                    ? `${config.activeColor} text-white shadow-md`
                    : `text-gray-600 ${config.hoverBg}`
                  }
                `}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full opacity-50" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Image Preloading - Hidden but loaded */}
      <div className="hidden">
        {characters.map((character) => (
          <Image
            key={character.id}
            src={character.image}
            alt=""
            width={300}
            height={300}
            priority={false}
          />
        ))}
      </div>

      {/* Character Content - Only active tab rendered */}
      <div className="max-w-7xl mx-auto">
        {(() => {
          const tabConfig = getTabConfig(activeTab);
          const tabCharacters = getCharactersByTab(activeTab);

          return (
            <div
              key={activeTab}
              className="transition-opacity duration-300 opacity-100"
            >
              {/* Tab Header */}
              <div className="mb-12 text-center">
                <h2 className={`text-4xl md:text-5xl font-bold ${tabConfig.textColor} mb-4`}>
                  {tabConfig.title}
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {tabConfig.description}
                </p>
              </div>

              {/* Character Grid - 4 columns on desktop */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {tabCharacters.map((character) => (
                  <Link
                    key={character.id}
                    href={`/characters/${character.id}?fromTab=${encodeURIComponent(activeTab)}`}
                    className="group"
                  >
                    <div className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${tabConfig.borderColor} border-t-4`}>
                      <div className="relative aspect-[3/4]">
                        <CharacterImage
                          src={character.image}
                          alt={`${character.name} from Kpop Demon Hunters - ${character.role} character profile`}
                          name={character.name}
                          role={character.role}
                          priority={activeTab === "HUNTR/X"}
                        />
                      </div>
                      <div className="p-5">
                        <h3 className={`text-xl md:text-2xl font-bold text-gray-900 mb-2 ${tabConfig.textColor.replace('text-', 'group-hover:text-')} transition-colors`}>
                          {character.name}
                        </h3>
                        <span className={`inline-block ${tabConfig.badgeColor} px-3 py-1 rounded-full text-xs font-semibold mb-3`}>
                          {character.role}
                        </span>
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                          {character.description}
                        </p>
                        <div className={`mt-4 flex items-center ${tabConfig.textColor} font-semibold text-sm`}>
                          View Profile
                          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })()}
      </div>
    </>
  );
}
