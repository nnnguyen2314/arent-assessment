import React from 'react';
import styled from "styled-components";
import RecommendedList from "@modules/column/features/components/recommendedList/RecommendedList";
import recommendedListData from '../../../shared/misc/mockData/recommendedList.json';
import myDiariesData from '../../../shared/misc/mockData/myDiaries.json';
import {Button, Space} from "antd";
import MyDiaryList from "@modules/record/features/components/myDiaryList/MyDiaryList";
import bodyWeightFatData from "@modules/shared/misc/mockData/bodyWeightFatData.json";
import BodyWeightFatGraph from "@modules/record/features/components/personalRecordGraphs/BodyWeightFatGraph";
import EntrySelectionList from "@modules/record/features/components/entrySelectionList/EntrySelectionList";

const StyledRecordContainer = styled(Space)`
  padding: 50px 157px;
  display: flex;
  justify-content: center;
  
    .more-columns-wrapper {
      display: flex;
      justify-content: center;
      
      .more-columns {
        width: 536px;
        background: linear-gradient(0deg, rgba(217, 217, 217, 0.1), rgba(217, 217, 217, 0.1)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
        display: flex;
      }
    }
`;

const RecordContainer = () => {
    return (
        <StyledRecordContainer direction="vertical" size="large">
            <EntrySelectionList entrySelectionList={recommendedListData} />
            <BodyWeightFatGraph data={bodyWeightFatData} />
            <MyDiaryList myDiaryList={myDiariesData} />
            <div className="more-columns-wrapper">
                <div className="more-columns">
                    <span>more my diary</span>
                    <svg width="296" height="56" viewBox="0 0 296 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.03401 0H290.966C293.746 0 296 2.23858 296 5V51C296 53.7614 293.746 56 290.966 56H5.03401C2.2538 56 0 53.7614 0 51V5C0 2.23858 2.2538 0 5.03401 0Z" fill="url(#paint0_linear_19990_937)"/>
                        <path d="M54.112 21.346C53.14 21.346 52.6 21.328 51.988 21.256C52.06 21.886 52.078 22.426 52.078 23.488V33.046C52.078 34.072 52.042 34.63 51.97 35.152H53.212V34.09H62.716V35.152H63.976C63.886 34.648 63.868 34.162 63.868 33.064V23.488C63.868 22.372 63.886 21.85 63.958 21.256C63.328 21.328 62.788 21.346 61.78 21.346H57.442C57.802 20.68 58.09 20.032 58.468 19.06L57.172 18.826C56.938 19.78 56.686 20.446 56.2 21.346H54.112ZM53.212 22.408H62.734V25.162H53.212V22.408ZM53.212 26.206H62.734V29.05H53.212V26.206ZM53.212 30.094H62.734V33.028H53.212V30.094ZM74.056 26.584C73.93 28.168 73.678 29.158 73.084 30.292C72.22 31.93 70.852 33.118 68.548 34.234C68.926 34.594 69.106 34.828 69.34 35.242C71.536 34.108 72.94 32.884 73.876 31.318C74.704 29.914 75.118 28.564 75.28 26.584H79.474C79.474 29.698 79.258 32.146 78.88 33.244C78.754 33.586 78.556 33.694 77.98 33.694C77.332 33.694 76.432 33.586 75.442 33.388C75.622 33.91 75.676 34.18 75.73 34.666C76.864 34.774 77.494 34.81 78.088 34.81C79.132 34.81 79.564 34.63 79.87 34.09C80.338 33.244 80.68 30.202 80.68 26.71C80.698 25.9 80.698 25.756 80.752 25.432C80.23 25.504 79.69 25.522 78.862 25.522H72.94C72.202 25.522 71.59 25.486 71.068 25.414V26.692C71.626 26.62 72.238 26.584 72.922 26.584H74.056ZM73.318 19.114C73.228 19.654 72.994 20.212 72.544 21.004C71.338 23.164 69.79 24.82 67.612 26.278C68.026 26.62 68.26 26.89 68.494 27.25C71.032 25.378 72.778 23.29 74.164 20.5C74.434 19.942 74.506 19.798 74.668 19.582L73.318 19.114ZM77.314 19.618C77.404 19.762 77.512 19.96 77.602 20.122C79.294 23.434 80.824 25.252 83.668 27.358C83.938 26.89 84.172 26.584 84.514 26.26C82.048 24.64 80.518 23.02 79.204 20.662C78.826 19.978 78.664 19.618 78.52 19.15L77.314 19.618ZM94.972 22.066C95.872 22.102 96.394 22.228 97.06 22.516C98.878 23.326 99.922 24.982 99.922 27.034C99.922 29.248 98.716 31.174 96.736 32.074C95.89 32.47 95.044 32.704 93.73 32.92C94.072 33.352 94.18 33.532 94.36 34.126C95.602 33.856 96.286 33.64 97.096 33.298C99.706 32.182 101.218 29.878 101.218 27.088C101.218 25.36 100.606 23.794 99.472 22.696C98.302 21.544 96.538 20.914 94.522 20.914C92.11 20.914 90.148 21.724 88.708 23.308C87.502 24.658 86.818 26.44 86.818 28.276C86.818 30.796 88.096 32.668 89.806 32.668C91.102 32.668 92.164 31.588 93.208 29.212C94.018 27.322 94.702 24.568 94.972 22.066ZM93.676 22.084C93.442 24.388 92.776 27.052 92.038 28.744C91.264 30.508 90.544 31.354 89.788 31.354C88.816 31.354 88.06 30.022 88.06 28.294C88.06 26.062 89.176 24.028 90.994 22.93C91.822 22.426 92.596 22.174 93.676 22.084ZM106.15 33.19C106.15 34 106.114 34.558 106.042 35.098H107.356V33.928H116.644V35.098H117.958C117.886 34.54 117.85 34.036 117.85 33.172V21.634C117.85 20.95 117.868 20.5 117.94 19.978C117.418 20.05 116.914 20.068 116.086 20.068H107.986C107.158 20.068 106.636 20.05 106.06 19.978C106.132 20.5 106.15 21.022 106.15 21.742V33.19ZM107.356 21.166H116.644V26.206H107.356V21.166ZM107.356 27.304H116.644V32.83H107.356V27.304ZM122.71 20.806C123.142 20.752 123.502 20.734 124.078 20.734H126.904C127.48 20.734 127.876 20.752 128.272 20.806V19.672C127.822 19.744 127.552 19.762 126.904 19.762H124.078C123.43 19.762 123.142 19.744 122.71 19.672V20.806ZM122.08 23.344C122.512 23.29 122.89 23.272 123.52 23.272H127.678C128.326 23.272 128.632 23.29 128.992 23.344V22.174C128.614 22.246 128.29 22.264 127.552 22.264H123.52C122.836 22.264 122.494 22.246 122.08 22.174V23.344ZM122.782 25.864C123.16 25.81 123.484 25.792 124.078 25.792H127.066C127.642 25.792 127.912 25.81 128.344 25.864V24.748C128.002 24.802 127.678 24.82 127.066 24.82H124.078C123.448 24.82 123.16 24.802 122.782 24.748V25.864ZM122.782 28.33C123.16 28.276 123.502 28.258 124.078 28.258H127.066C127.642 28.258 127.858 28.276 128.344 28.33V27.214C127.984 27.268 127.696 27.286 127.066 27.286H124.078C123.448 27.286 123.16 27.268 122.782 27.214V28.33ZM124.042 35.422V34.288H127.282V35.188H128.398C128.344 34.756 128.308 34.27 128.308 33.766V31.174C128.308 30.508 128.326 30.166 128.362 29.77C128.038 29.824 127.84 29.824 127.066 29.824H124.33C123.772 29.824 123.358 29.806 122.89 29.752C122.962 30.22 122.98 30.634 122.98 31.246V33.676C122.98 34.414 122.944 34.9 122.872 35.422H124.042ZM124.024 30.742H127.282V33.352H124.024V30.742ZM131.008 26.584H135.436C136.192 26.584 136.642 26.602 137.2 26.656C137.146 26.17 137.128 25.702 137.128 24.982V21.562C137.128 20.572 137.146 20.266 137.182 19.798C136.66 19.852 136.228 19.87 135.472 19.87H131.116C130.486 19.87 129.964 19.834 129.46 19.762V21.022C129.946 20.95 130.378 20.932 131.116 20.932H135.994V25.558H131.476C130.738 25.558 130.252 25.54 129.73 25.486C129.802 25.99 129.82 26.368 129.82 27.214V33.262C129.82 34.072 130.018 34.378 130.576 34.558C131.116 34.702 131.98 34.774 133.528 34.774C136.03 34.774 136.912 34.612 137.344 34.036C137.722 33.55 137.938 32.632 138.136 30.886C137.776 30.796 137.326 30.58 136.93 30.346C136.84 32.056 136.66 32.974 136.39 33.262C136.048 33.586 135.454 33.676 133.582 33.676C132.556 33.676 131.782 33.64 131.476 33.568C131.098 33.478 131.008 33.37 131.008 33.01V26.584ZM145.246 21.886C143.41 21.886 142.042 21.814 141.394 21.688L141.376 22.93C141.574 22.912 141.61 22.912 141.772 22.912C141.826 22.912 141.97 22.912 142.06 22.912C142.726 22.93 144.418 22.966 144.706 22.966C144.796 22.966 144.976 22.948 145.048 22.93C144.94 23.11 144.94 23.11 144.886 23.2C143.59 25.504 142.096 27.394 140.854 28.348L141.862 29.356C142.15 28.87 142.546 28.456 143.248 27.862C144.706 26.62 146.128 25.954 147.262 25.954C148.108 25.954 148.54 26.386 148.684 27.376C147.478 27.898 146.614 28.366 146.002 28.816C144.778 29.734 144.166 30.67 144.166 31.66C144.166 33.514 145.732 34.432 148.954 34.432C150.34 34.432 151.906 34.306 153.328 34.072C153.688 34.018 153.778 34 154.048 33.982L153.886 32.596C152.86 33.01 150.862 33.298 149.08 33.298C146.542 33.298 145.426 32.776 145.426 31.588C145.426 30.508 146.362 29.662 148.81 28.51C148.828 28.726 148.828 28.762 148.828 29.05C148.828 30.148 148.774 31.246 148.72 31.642L149.944 31.624C149.908 31.372 149.908 31.228 149.908 30.976C149.908 30.814 149.908 30.562 149.926 30.166C149.944 29.806 149.944 29.41 149.944 29.176C149.944 28.726 149.944 28.546 149.908 28.078C152.158 27.196 153.778 26.656 154.714 26.494L154.138 25.234C153.85 25.432 153.796 25.45 152.914 25.756C152.122 26.044 151.096 26.422 149.782 26.944C149.548 25.612 148.738 24.946 147.406 24.946C146.47 24.946 145.516 25.252 144.688 25.828C144.508 25.954 144.508 25.954 143.86 26.458C143.842 26.44 143.842 26.44 143.824 26.404C143.824 26.404 143.824 26.404 143.824 26.386C143.824 26.386 143.842 26.386 143.842 26.368C143.86 26.35 143.95 26.278 144.076 26.188C144.148 26.134 144.508 25.72 144.688 25.504C145.318 24.73 145.768 24.01 146.308 22.948C148.486 22.876 150.376 22.732 152.248 22.48C152.572 22.426 152.68 22.408 152.968 22.39L152.86 21.166C151.87 21.49 150.07 21.706 147.19 21.85C147.028 21.85 147.028 21.85 146.812 21.868C146.902 21.706 147.136 21.22 147.37 20.644C147.676 19.906 147.676 19.906 147.838 19.672L146.398 19.42C146.344 19.996 146.128 20.626 145.534 21.886H145.246ZM159.25 27.97C159.466 27.988 159.52 27.988 159.808 28.078C160.618 28.276 161.446 28.42 162.526 28.528C162.508 28.69 162.508 28.69 162.49 28.96C162.436 29.41 162.418 29.77 162.418 30.148C162.418 31.174 162.616 32.038 162.976 32.632C163.678 33.784 165.118 34.432 167.008 34.432C170.158 34.432 172.282 32.722 172.282 30.184C172.282 28.87 171.868 27.988 170.59 26.602C170.068 26.836 169.87 26.89 169.276 26.962C170.428 27.952 170.986 28.96 170.986 30.094C170.986 32.002 169.42 33.244 167.008 33.244C165.91 33.244 165.046 32.974 164.47 32.47C163.912 31.984 163.642 31.3 163.642 30.31C163.642 30.004 163.678 29.41 163.714 28.978C163.732 28.744 163.732 28.744 163.732 28.618C164.542 28.654 164.83 28.654 165.28 28.654C166.126 28.654 166.9 28.618 167.818 28.51C168.07 28.492 168.124 28.492 168.304 28.474L168.34 27.268C167.638 27.448 166.324 27.556 165.028 27.556C164.776 27.556 164.524 27.556 163.84 27.538C163.948 26.53 163.966 26.35 164.254 24.28C165.244 24.316 165.55 24.316 165.838 24.316C166.36 24.316 166.9 24.298 167.458 24.244C168.358 24.172 168.358 24.172 168.718 24.136L168.772 22.894C167.962 23.092 166.828 23.2 165.478 23.2C165.19 23.2 164.938 23.2 164.434 23.182C164.524 22.678 164.56 22.498 164.614 22.102C164.776 21.112 164.776 21.112 164.794 20.95C164.92 20.302 164.974 20.086 165.082 19.744L163.642 19.582C163.642 19.654 163.642 19.69 163.642 19.726C163.642 20.194 163.498 21.382 163.21 23.11C161.95 23.002 160.744 22.732 159.97 22.408L159.808 23.596C160.06 23.65 160.132 23.668 160.366 23.722C161.428 23.974 162.202 24.1 163.048 24.208C162.904 25.162 162.724 26.566 162.634 27.448C161.266 27.286 160.132 27.052 159.412 26.728L159.25 27.97ZM178.276 28.006C178.816 27.754 179.104 27.664 180.202 27.412C182.344 26.908 183.73 26.692 184.936 26.692C187.114 26.692 188.266 27.574 188.266 29.212C188.266 30.814 187.024 32.182 184.972 32.848C183.946 33.19 182.542 33.406 181.426 33.406C181.354 33.406 181.282 33.406 181.174 33.388C181.462 33.946 181.534 34.126 181.642 34.63C183.82 34.36 184.252 34.288 185.35 33.946C187.852 33.154 189.472 31.318 189.472 29.302C189.472 28.564 189.274 27.826 188.914 27.25C188.23 26.134 186.952 25.576 185.098 25.576C183.55 25.576 181.966 25.81 179.608 26.368C178.492 26.638 178.402 26.656 177.952 26.692L178.276 28.006ZM198.58 19.87C198.688 20.158 198.724 20.248 198.886 21.004C199.354 23.308 199.696 24.568 200.2 26.044C199.084 26.602 198.526 26.944 197.842 27.502C196.78 28.366 196.24 29.41 196.24 30.562C196.24 31.984 196.996 32.974 198.472 33.514C199.336 33.838 200.686 34 202.468 34C203.728 34 204.592 33.946 206.446 33.766C207.436 33.658 207.436 33.658 207.778 33.658L207.634 32.164C206.572 32.542 204.556 32.776 202.486 32.776C198.958 32.776 197.572 32.146 197.572 30.508C197.572 29.014 198.904 27.826 201.982 26.602C203.566 25.954 206.14 25.126 207.4 24.856L206.86 23.488C206.5 23.668 206.338 23.722 205.708 23.956C202.918 24.928 202.414 25.126 201.352 25.558C200.74 23.758 200.074 20.806 200.002 19.6L198.58 19.87ZM217.516 30.094C217.39 30.832 217.354 30.958 217.192 31.336C216.778 32.326 215.932 33.118 214.69 33.658C213.934 34 213.304 34.162 211.936 34.414C212.242 34.792 212.386 35.044 212.566 35.494C214.798 35.008 216.112 34.396 217.174 33.37C218.074 32.506 218.506 31.588 218.758 30.094H220.954V33.712C220.954 34.288 221.062 34.522 221.386 34.72C221.746 34.936 222.556 35.026 224.032 35.026C227.452 35.026 227.65 34.864 228.064 31.642C227.704 31.534 227.434 31.426 226.93 31.156C226.822 32.56 226.696 33.208 226.498 33.514C226.246 33.892 225.832 33.964 224.122 33.964C222.286 33.964 222.106 33.91 222.106 33.352V30.094H223.672C224.644 30.094 225.184 30.112 225.688 30.148C225.616 29.608 225.598 29.104 225.598 28.258V22.156C225.598 21.148 225.634 20.14 225.688 19.762C225.166 19.816 224.5 19.852 223.762 19.852H216.238C215.464 19.852 214.906 19.834 214.312 19.762C214.366 20.158 214.402 21.112 214.402 22.156V28.258C214.402 29.086 214.384 29.59 214.312 30.148C214.87 30.112 215.338 30.094 216.346 30.094H217.516ZM215.518 20.914H224.482V22.876H215.518V20.914ZM215.518 23.884H224.482V25.954H215.518V23.884ZM215.518 26.962H224.482V29.104H215.518V26.962ZM233.338 21.94C233.734 21.886 233.914 21.868 234.31 21.85C237.046 21.76 239.206 21.634 239.782 21.526C239.89 21.508 239.89 21.508 239.944 21.508L239.98 21.544L239.908 21.616C239.872 21.652 239.836 21.688 239.836 21.688C239.692 21.832 239.692 21.832 239.584 21.94C238.342 23.164 235.498 25.666 233.572 27.196C232.348 28.186 231.7 28.654 231.052 29.032L231.862 30.184C233.95 28.258 236.794 27.106 239.44 27.106C241.87 27.106 243.31 28.132 243.31 29.86C243.31 31.39 242.32 32.488 240.43 33.01C240.178 32.218 239.98 31.786 239.602 31.282C238.882 30.328 237.838 29.806 236.632 29.806C235.138 29.806 234.022 30.706 234.022 31.912C234.022 33.568 235.48 34.504 238.018 34.504C242.014 34.504 244.624 32.65 244.624 29.842C244.624 27.538 242.698 26.062 239.692 26.062C238.108 26.062 236.65 26.44 235.282 27.178L235.246 27.124C236.506 26.314 238.684 24.442 241.168 22.012C241.744 21.454 241.834 21.382 242.086 21.256L241.33 20.266C241.096 20.392 240.934 20.428 240.466 20.464C238.846 20.59 236.452 20.698 234.958 20.698C234.094 20.698 233.77 20.68 233.266 20.59L233.338 21.94ZM239.242 33.334C238.594 33.442 238.378 33.46 237.928 33.46C237.154 33.46 236.38 33.298 235.912 33.046C235.426 32.758 235.192 32.416 235.192 31.948C235.192 31.264 235.75 30.832 236.65 30.832C237.946 30.832 238.846 31.696 239.242 33.334Z" fill="white"/>
                        <defs>
                            <linearGradient id="paint0_linear_19990_937" x1="199.618" y1="72.4081" x2="208.304" y2="1.57695" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FFCC21"/>
                                <stop offset="1" stop-color="#FF963C"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </StyledRecordContainer>
    )
};

export default RecordContainer;