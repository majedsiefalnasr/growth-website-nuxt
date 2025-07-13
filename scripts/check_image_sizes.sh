
#!/bin/bash

###############################################################################
# check_image_sizes.sh
# Checks all images in the public/ directory (excluding /public/images/blog/) for size limits.
# Exits with code 1 if any image exceeds the MAX_SIZE.
# Usage: ./check_image_sizes.sh [--help]
#
# Requirements: bash, stat, find, awk
#
# Author: Ultimate Solutions EGY
# Last updated: 2025-07-13
###############################################################################

set -euo pipefail

MAX_SIZE=900000 # 900000 bytes = 900 KB
declare -a TOO_LARGE
declare -i TOTAL_IMAGES=0

show_help() {
  echo "Usage: $0 [--help]"
  echo "Checks image files in public/ (excluding /public/images/blog/) for size limits."
  echo "Fails if any image exceeds ${MAX_SIZE} bytes."
}

# Check for help flag
if [[ "${1:-}" == "--help" ]]; then
  show_help
  exit 0
fi

# Check for required tools
for tool in stat find awk; do
  if ! command -v "$tool" >/dev/null 2>&1; then
    echo "Error: Required tool '$tool' is not installed." >&2
    exit 2
  fi
done

echo "Checking image sizes in public/ (excluding /public/images/blog/)..."

while read -r img; do
  # Use stat for file size (portable for macOS)
  size=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img")
  TOTAL_IMAGES+=1
  if [ "$size" -gt "$MAX_SIZE" ]; then
    TOO_LARGE+=("$img ($size bytes)")
  fi
done < <(find public -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.webp" \) -not -path "public/images/blog/*")

echo
echo "Checked $TOTAL_IMAGES image(s)."

if [ "${#TOO_LARGE[@]}" -gt 0 ]; then
  echo "The following images exceed the ${MAX_SIZE} byte limit:"
  printf '  %s\n' "${TOO_LARGE[@]}"
  echo
  echo "Total images exceeding limit: ${#TOO_LARGE[@]}"
  exit 1
else
  echo "All images are within the size limit."
fi
