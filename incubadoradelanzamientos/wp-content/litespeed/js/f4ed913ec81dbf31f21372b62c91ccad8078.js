(()=>{var __webpack_exports__={};
/*!************************************!*\
  !*** ./src/assets/js/elementor.js ***!
  \************************************/
(function(){let gridFound,masonryFound;const gridObserver=new MutationObserver(function(mutations){mutations.forEach(function(mutationRecord){const grid=mutationRecord.target.querySelector('.learndash-course-grid'),skin=grid.dataset.skin,display=mutationRecord.target.style.display;if('none'!==display){if('grid'===skin){gridFound=!0}else if('masonry'===skin){masonryFound=!0}}});if(gridFound&&'function'===typeof learndash_course_grid_init_grid_responsive_design){learndash_course_grid_init_grid_responsive_design()}
if(masonryFound&&'function'===typeof learndash_course_grid_init_masonry_responsive_design){learndash_course_grid_init_masonry_responsive_design()}});const grids=document.querySelectorAll('.learndash-course-grid');grids.forEach(function(grid){const target=grid.closest('.elementor-tab-content');if(target){gridObserver.observe(target,{attributes:!0,attributeFilter:['style']})}})})()})()
;