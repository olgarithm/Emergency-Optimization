import java.io.*;
import java.util.*;

public class DataProcess {
    public static void main(String[] args) throws FileNotFoundException {
        File file = new File("/Users/OlgaAndreeva/Emergency-Optimization/LatLongDispatch.csv");
        List<LatLongObject> lines = new ArrayList<LatLongObject>();
        Scanner input = new Scanner(file);
        Map<LatLongObject, Map<String, Integer>> dispatchTypes = new HashMap<LatLongObject, Map<String, Integer>>();

        while(input.hasNextLine()){
            String line = input.nextLine();
            String[] values = line.split(",");
            LatLongObject newEmergency = new LatLongObject(values[0], values[1].substring(0, 5), values[2].substring(0, 6));
            System.out.println(newEmergency);
            if (!dispatchTypes.containsKey(newEmergency)) {
                dispatchTypes.put(newEmergency, new HashMap<String, Integer>());
                dispatchTypes.get(newEmergency).put(values[0], 1);
            }
            if (dispatchTypes.get(newEmergency).get(values[0]) == null) {
                dispatchTypes.get(newEmergency).put(values[0], 1);
            } else {
                dispatchTypes.get(newEmergency).put(values[0], dispatchTypes.get(newEmergency).get(values[0]) + 1);
            }
        }

    System.out.println(dispatchTypes);
      /*  Map<LatLongObject, String> dispatchMax = new HashMap<LatLongObject, String>();
        for (Map.Entry<LatLongObject, Map<String, Integer>> incident : dispatchTypes.entrySet()) {
            String largestDispatch = "";
            for (Map.Entry<String, Integer> dispatch : incident.entrySet()) {
                 if (largestDispatch.equals("") || dispatch.getValue().compareTo(largestDispatch) > 0) {
                    largestDispatch = dispatch.getValue();
                }
            }
            dispatchMax.put(incident.getKey(), largestDispatch);
        } */
    }
}