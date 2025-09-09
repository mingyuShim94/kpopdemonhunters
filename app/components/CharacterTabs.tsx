"use client";

import Link from "next/link";
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
          gradientFrom: "from-pink-400",
          gradientTo: "to-purple-400",
          badgeColor: "bg-purple-600/30 text-purple-200"
        };
      case "Saja Boys":
        return {
          title: "Saja Boys",
          description: "The demonic boy band serving the Demon King, using their music to drain souls",
          gradientFrom: "from-red-400",
          gradientTo: "to-orange-400",
          badgeColor: "bg-red-600/30 text-red-200"
        };
      case "Others":
        return {
          title: "Other Characters",
          description: "Mentors, allies, and villains who shape the story",
          gradientFrom: "from-cyan-400",
          gradientTo: "to-blue-400",
          badgeColor: "bg-cyan-600/30 text-cyan-200"
        };
      default:
        return {
          title: "",
          description: "",
          gradientFrom: "",
          gradientTo: "",
          badgeColor: ""
        };
    }
  };


  return (
    <>
      {/* Tab Navigation */}
      <div className="flex justify-center mb-4">
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-1 border border-white/10">
          <div className="flex space-x-1">
            {(["HUNTR/X", "Saja Boys", "Others"] as TabType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${activeTab === tab
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                    : "text-purple-200 hover:text-white hover:bg-white/10"
                  }
                `}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Character Content - All tabs rendered simultaneously */}
      <div className="max-w-6xl mx-auto">
        {(["HUNTR/X", "Saja Boys", "Others"] as TabType[]).map((tab) => {
          const tabConfig = getTabConfig(tab);
          const tabCharacters = getCharactersByTab(tab);
          const isActive = activeTab === tab;

          return (
            <div
              key={tab}
              className={`transition-opacity duration-300 ${
                isActive ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              <div className="mb-8 text-center">
                <h2 className={`text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${tabConfig.gradientFrom} ${tabConfig.gradientTo} mb-3`}>
                  {tabConfig.title}
                </h2>
                <p className="text-purple-200 text-lg">
                  {tabConfig.description}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tabCharacters.map((character) => (
                  <Link
                    key={character.id}
                    href={`/characters/${character.id}?fromTab=${encodeURIComponent(tab)}`}
                    className="group"
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 border border-white/20">
                      <CharacterImage
                        src={character.image}
                        alt={`${character.name} character portrait`}
                        name={character.name}
                        role={character.role}
                        priority={tab === "HUNTR/X"}
                      />
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                            {character.name}
                          </h3>
                          <span className={`${tabConfig.badgeColor} px-3 py-1 rounded-full text-sm`}>
                            {character.role}
                          </span>
                        </div>
                        <p className="text-purple-200 leading-relaxed">
                          {character.description}
                        </p>
                        <div className="mt-4 text-purple-300 group-hover:text-purple-200 transition-colors">
                          Learn more →
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}