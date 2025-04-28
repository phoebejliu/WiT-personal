import React, { useState } from 'react';
import styles from './CandidatesDetailPage.module.css';
import PublicNavbar from '../layout/PublicNavbar'; // Assuming you want to reuse the existing navbar

const CandidatesDetailPage = () => {
  // Track expanded/collapsed state for each content box
  const [expandedBoxes, setExpandedBoxes] = useState({
    box1: false,
    box2: false,
    box3: false,
    box4: false,
    box5: false,
    box6: false
  });

  // Toggle expanded/collapsed state for a specific box
  const toggleBox = (boxId) => {
    setExpandedBoxes(prev => ({
      ...prev,
      [boxId]: !prev[boxId]
    }));
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Reuse existing navbar component created by colleague */}
      <PublicNavbar />
      
      <div className={styles.pageContainer}>
        {/* Horizontal divider line */}
        <div className={styles.divider}></div>
        
        {/* Main content area */}
        <div className={styles.mainContent}>
          {/* Page title and subtitle area */}
          <div className={styles.titleArea}>
            <div className={styles.pageTitle}>Category Lorem Ipsum > Candidate A</div>
            <div className={styles.pageSubtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum lorem, mattis et dictum et, sodales aliquam orci.</div>
          </div>
          
          {/* Two-column layout */}
          <div className={styles.twoColumnLayout}>
            {/* Left column with collapsible content boxes */}
            <div className={styles.contentColumn}>
              {/* Collapsible content box 1 */}
              <div 
                className={styles.contentBox} 
                data-component="collapsible-box" 
                data-state={expandedBoxes.box1 ? "expanded" : "collapsed"}
              >
                <div 
                  className={`${styles.boxContent} ${!expandedBoxes.box1 ? styles.collapsed : ''}`} 
                  data-element="box-content"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum lorem, mattis et dictum et, sodales aliquam orci. Donec dictum leo purus, sit amet sagittis purus euismod et. Mauris nisi tortor, iaculis eget dui sed, ultricies pharetra dui.
                  <br/><br/>
                  Fusce posuere aliquet elementum. Integer euismod sem enim, vel condimentum felis eleifend vel. Quisque pretium, elit ut dignissim condimentum, sem felis ultricies ante, pulvinar blandit neque massa at mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </div>
                <div 
                  className={`${styles.toggleIcon} ${expandedBoxes.box1 ? styles.rotated : ''}`}
                  data-element="toggle-icon"
                  onClick={() => toggleBox('box1')}
                >
                  <div className={styles.toggleIconBox}></div>
                </div>
              </div>
              
              {/* Collapsible content box 2 */}
              <div 
                className={styles.contentBox} 
                data-component="collapsible-box" 
                data-state={expandedBoxes.box2 ? "expanded" : "collapsed"}
              >
                <div 
                  className={`${styles.boxContent} ${!expandedBoxes.box2 ? styles.collapsed : ''}`}
                  data-element="box-content"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum lorem, mattis et dictum et, sodales aliquam orci. Donec dictum leo purus, sit amet sagittis purus euismod et. Mauris nisi tortor, iaculis eget dui sed, ultricies pharetra dui.
                  <br/><br/>
                  Fusce posuere aliquet elementum. Integer euismod sem enim, vel condimentum felis eleifend vel. Quisque pretium, elit ut dignissim condimentum, sem felis ultricies ante, pulvinar blandit neque massa at mauris.
                </div>
                <div 
                  className={`${styles.toggleIcon} ${expandedBoxes.box2 ? styles.rotated : ''}`}
                  data-element="toggle-icon"
                  onClick={() => toggleBox('box2')}
                >
                  <div className={styles.toggleIconBox}></div>
                </div>
              </div>
              
              {/* Collapsible content box 3 */}
              <div 
                className={styles.contentBox} 
                data-component="collapsible-box" 
                data-state={expandedBoxes.box3 ? "expanded" : "collapsed"}
              >
                <div 
                  className={`${styles.boxContent} ${!expandedBoxes.box3 ? styles.collapsed : ''}`}
                  data-element="box-content"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum lorem, mattis et dictum et, sodales aliquam orci. Donec dictum leo purus, sit amet sagittis purus euismod et. Mauris nisi tortor, iaculis eget dui sed, ultricies pharetra dui.
                  <br/><br/>
                  Fusce posuere aliquet elementum. Integer euismod sem enim, vel condimentum felis eleifend vel. Quisque pretium, elit ut dignissim condimentum, sem felis ultricies ante, pulvinar blandit neque massa at mauris.
                </div>
                <div 
                  className={`${styles.toggleIcon} ${expandedBoxes.box3 ? styles.rotated : ''}`}
                  data-element="toggle-icon"
                  onClick={() => toggleBox('box3')}
                >
                  <div className={styles.toggleIconBox}></div>
                </div>
              </div>
              
              {/* Collapsible content box 4 */}
              <div 
                className={styles.contentBox} 
                data-component="collapsible-box" 
                data-state={expandedBoxes.box4 ? "expanded" : "collapsed"}
              >
                <div 
                  className={`${styles.boxContent} ${!expandedBoxes.box4 ? styles.collapsed : ''}`}
                  data-element="box-content"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum lorem, mattis et dictum et, sodales aliquam orci. Donec dictum leo purus, sit amet sagittis purus euismod et. Mauris nisi tortor, iaculis eget dui sed, ultricies pharetra dui.
                  <br/><br/>
                  Fusce posuere aliquet elementum. Integer euismod sem enim, vel condimentum felis eleifend vel. Quisque pretium, elit ut dignissim condimentum, sem felis ultricies ante, pulvinar blandit neque massa at mauris.
                </div>
                <div 
                  className={`${styles.toggleIcon} ${expandedBoxes.box4 ? styles.rotated : ''}`}
                  data-element="toggle-icon"
                  onClick={() => toggleBox('box4')}
                >
                  <div className={styles.toggleIconBox}></div>
                </div>
              </div>
              
              {/* Collapsible content box 5 */}
              <div 
                className={styles.contentBox} 
                data-component="collapsible-box" 
                data-state={expandedBoxes.box5 ? "expanded" : "collapsed"}
              >
                <div 
                  className={`${styles.boxContent} ${!expandedBoxes.box5 ? styles.collapsed : ''}`}
                  data-element="box-content"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum lorem, mattis et dictum et, sodales aliquam orci. Donec dictum leo purus, sit amet sagittis purus euismod et. Mauris nisi tortor, iaculis eget dui sed, ultricies pharetra dui.
                  <br/><br/>
                  Fusce posuere aliquet elementum. Integer euismod sem enim, vel condimentum felis eleifend vel. Quisque pretium, elit ut dignissim condimentum, sem felis ultricies ante, pulvinar blandit neque massa at mauris.
                </div>
                <div 
                  className={`${styles.toggleIcon} ${expandedBoxes.box5 ? styles.rotated : ''}`}
                  data-element="toggle-icon"
                  onClick={() => toggleBox('box5')}
                >
                  <div className={styles.toggleIconBox}></div>
                </div>
              </div>
              
              {/* Collapsible content box 6 */}
              <div 
                className={styles.contentBox} 
                data-component="collapsible-box" 
                data-state={expandedBoxes.box6 ? "expanded" : "collapsed"}
              >
                <div 
                  className={`${styles.boxContent} ${!expandedBoxes.box6 ? styles.collapsed : ''}`}
                  data-element="box-content"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum lorem, mattis et dictum et, sodales aliquam orci. Donec dictum leo purus, sit amet sagittis purus euismod et. Mauris nisi tortor, iaculis eget dui sed, ultricies pharetra dui.
                  <br/><br/>
                  Fusce posuere aliquet elementum. Integer euismod sem enim, vel condimentum felis eleifend vel. Quisque pretium, elit ut dignissim condimentum, sem felis ultricies ante, pulvinar blandit neque massa at mauris.
                </div>
                <div 
                  className={`${styles.toggleIcon} ${expandedBoxes.box6 ? styles.rotated : ''}`}
                  data-element="toggle-icon"
                  onClick={() => toggleBox('box6')}
                >
                  <div className={styles.toggleIconBox}></div>
                </div>
              </div>
            </div>
            
            {/* Right sidebar */}
            <div className={styles.sidebar}>
              {/* Category criteria box */}
              <div className={styles.categoryBox}>
                <div className={styles.criteriaTitle}>Category Criteria</div>
                <div className={styles.criteriaContent}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                  Sed ipsum lorem, mattis et dictum et, sodales aliquam orci.<br/>
                  Donec dictum leo purus, sit amet sagittis purus euismod et.<br/>
                  Fusce posuere aliquet elementum.
                </div>
              </div>
              
              {/* Action buttons */}
              <div>
                <div className={styles.primaryButton}>
                  <div className={styles.buttonTextWhite}>Vote for Candidate</div>
                </div>
                <div className={styles.secondaryButton}>
                  <div className={styles.buttonTextBlack}>Recategorise</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidatesDetailPage;